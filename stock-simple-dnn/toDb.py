from pandas_datareader import data as pdr
import numpy as np
import datetime
import pandas as pd
import matplotlib.pylab as plt
from pandas_datareader import data as pdr

start_date = datetime.datetime(2010,12, 30)
end_date = "2020-01-01"

 
def get_data(names, start_date=None, end_date=None):
    try:
        import yfinance as yf
    except ImportError:
        print("Can't import yahoo finance")

    try:
        import datetime
        if isinstance(start_date,str):
            start_date = datetime.datetime.strptime(start_date,"%y-%m-%d")
        if isinstance(start_date,str):
            end_date = datetime.datetime.strptime(end_date,"%y-%m-%d")
    except ImportError:
        print("Can't import datetime lib")
    except Exception:
        raise Exception("Please provide value for startdate and enddate")

    try:
        yf.pdr_override()
        #resp = yf.download(names, start=start_date, end=end_date)
        resp = pdr.get_data_yahoo(names,start=start_date,end=end_date)
    except Exception:
        raise Exception("Can't get data from Yahoo Finance with yfinance")
    return resp

d = {
    0: {"Name": "GOOG", "Allocation": 20},
#    1: {"Name": "AMZN", "Allocation": 10},
#    2: {"Name": "MCD", "Allocation": 15},
#    3: {"Name": "DIS", "Allocation": 18},
}

pf_allocation = pd.DataFrame.from_dict(d, orient="index")

names = pf_allocation["Name"].values.tolist()

#data = _yfinance_request(names, start_date, end_date)
data = get_data(names,start_date,end_date)

#---------------------------------------------------------------------------
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="123",
  database="stockdata"
)

mycursor = mydb.cursor()

sql = "INSERT INTO candlestick (timestamp, open, high, low, close, volume) VALUES (%s, %s, %s, %s, %s, %s)"
#val = ("2017-01-01",data['Open'][0],data['High'][0], data['Low'][0], data['Adj Close'][0], data["Volume"][0])
#val = ("2017-01-01","1","1","1","1","1")
for rows in data.itertuples():
    val = list(rows)
    print(val[0])
    timestamp = val[0].strftime("%Y/%m/%d")
    vals = (timestamp,val[1],val[2],val[3],val[4],val[5])
    mycursor.execute(sql,vals) 

mydb.commit()

print(mycursor.rowcount, "record inserted.")
