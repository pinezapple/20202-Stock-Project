import datetime
from datetime import datetime as dt
import math
import random
import pickle
import json
import os

import numpy as np

from keras.models import Sequential
from keras.layers import LSTM, Dense
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error

import pandas_datareader.data as web
import pandas as pd
from pandas import Series, DataFrame

from absl import flags 
from absl import app


#start = datetime.datetime(2015, 1, 1)
#end = datetime.datetime(2019, 1, 11)

#df = web.DataReader("AAPL", 'yahoo', start, end)
#ass = [df.index]
#print(ass)
FLAGS = flags.FLAGS
flags.DEFINE_string("stock", "AAPL", "stock_name") # name ,default, help

def getDataAndModel(stockname, startdate, enddate,test_size,chunk,lstm_units,hidden_layers):
    #get data from yahoo
    stock = web.DataReader(stockname, 'yahoo', startdate, enddate)
    data, all_closes = [],[]
    adj_close = stock["Adj Close"]
    all_closes += list(adj_close)

    for i in range(len(adj_close)):
        j = 0 
        try:
            x, y = [],[]
            for _ in range(chunk):
                x.append(adj_close[i+j])
                j+=1
            y.append(adj_close[i+j])
            data.append((x,y))
        except IndexError:
            break

    #refine and reshape data
    all_closes = np.array(all_closes)
    all_closes = all_closes.reshape(-1,1)
     
    scaler = MinMaxScaler(feature_range=(0, 1))
    train_size = len(data) - test_size
    train_data = data[:train_size]
    test_data = data[train_size:]
    scaler.fit(all_closes)

    x_train = np.array([scaler.transform(np.array(x[0]).reshape(-1, 1)) for x in train_data])
    y_train = np.array([scaler.transform(np.array(x[1]).reshape(-1, 1))[0][0] for x in train_data])
    x_test = np.array([scaler.transform(np.array(x[0]).reshape(-1, 1)) for x in test_data])
    y_test = np.array([scaler.transform(np.array(x[1]).reshape(-1, 1))[0][0] for x in test_data])

#    print(x_train)
#    print("-----------------")
#    print(x_test)
#    print("-----------------")
#    print(y_train)
#    print("-----------------")
#    print(y_test)
    
    #creating model
    model = Sequential()
    model.add(LSTM(lstm_units, input_shape=(chunk,1), return_sequences=True))
    for _ in range(hidden_layers-1):
        model.add(LSTM(lstm_units, return_sequences=True))

    model.add(LSTM(lstm_units))
    model.add(Dense(1))
    model.compile(loss="mean_squared_error", optimizer="adam")
    return model, scaler, x_train, y_train, x_test, y_test
    
def main(argv):
    # starting arguments
    FILE_DIR = os.path.dirname(os.path.realpath(__file__))
    read_data_timeout = 10
    start = datetime.datetime(2019, 11, 20)
    end = datetime.datetime(2021, 11, 20)
    test_size = 30
    chunk = 5
    lstm_units = 10
    hidden_layers = 3
    epochs = 8
    batch_size = 10
    stockname = FLAGS.stock
    
    model, scaler, x_train, y_train, x_test, y_test = getDataAndModel(stockname,start,end,test_size,chunk,lstm_units,hidden_layers)
    print("Total data size: " + str(len(x_train) + len(x_test)))
    print("Train data size: " + str(len(x_train)))
    print("Test data size: " + str(len(x_test)))

    print("\nTraining...\n")

    model.fit(x_train, y_train, epochs=epochs, batch_size=batch_size)
    test_predictions = model.predict(x_test)

    #print(y_test)
    #y_test = scaler.inverse_transform([y_test])
    y_test = [y_test]
    y_test_price = scaler.inverse_transform(y_test)
    test_predictions_price = scaler.inverse_transform(test_predictions)
    
    print("real price")
    print(y_test_price)
    print("predict price")
    print(test_predictions_price)
    
    test_score = math.sqrt(mean_squared_error(y_test[0], test_predictions[:,0]))
    test_score_string = 'Test Score: %.2f RMSE' % test_score
    print(test_score_string)
    
    #saving model to files 
    today_date_str = str(dt.today().date())
    same_date = [x for x in os.listdir(os.path.join(FILE_DIR, 'models')) if today_date_str in x]
    filename = '{}_{}'.format(today_date_str, len(same_date))

    if filename not in os.listdir(os.path.join(FILE_DIR, 'models')):
	    os.makedirs(os.path.join(FILE_DIR, 'models/{}'.format(filename)))


    if not os.path.exists(os.path.join(FILE_DIR, 'models/{}/checkpoints/checkpoint-{}'.format(filename, epochs))):
        os.makedirs(os.path.join(FILE_DIR, 'models/{}/checkpoints/checkpoint-{}'.format(filename, epochs)))

    with open(os.path.join(FILE_DIR, 'models/{}/checkpoints/checkpoint-{}/model.json'.format(filename, epochs)), 'w') as f:
        f.write(model.to_json())
    
    model.save_weights(os.path.join(FILE_DIR, 'models/{}/checkpoints/checkpoint-{}/model.h5'.format(filename,epochs)))

    with open(os.path.join(FILE_DIR, 'models/{}/test_score.txt'.format(filename)), 'w') as f:
        f.write(test_score_string)

    with open(os.path.join(FILE_DIR, 'models/{}/scaler.pkl'.format(filename)), 'wb') as f:
        pickle.dump(scaler, f)

    startdate = str(start)
    end_date = str(end)
#    with open(os.path.join(FILE_DIR, 'models/{}/params.json'.format(filename)), 'w') as f:
#        json.dump(params, f)

    print("Model saved.")

app.run(main)
