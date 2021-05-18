import numpy as np
import datetime
import pandas as pd
import matplotlib.pylab as plt
from pandas_datareader import data as pdr

start_date = datetime.datetime(2019,12, 30)
end_date = "2019-12-31"

 
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

print(data['Adj Close'])
