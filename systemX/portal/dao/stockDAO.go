package dao

import (
	"context"
	"database/sql"
	"fmt"
	"portal/core"
	"portal/model"
)

const (
	GetAllPriceQuery                    = "select ticker, price, timestamp from predicted where (timestamp >= ?) and (timestamp <= ?)"
	GetRealPriceByTickerQueryComponent1 = "select close, timestamp from "
	GetRealPriceByTickerQueryComponent2 = " where (timestamp >= ?) and (timestamp <= ?)"
	GetPriceByTickerQueryComponent1     = "select ticker, price, timestamp from "
	GetPriceBytickerQueryComponent2     = " where (ticker = ?) and (timestamp >= ?) and (timestamp <= ?)"
)

type IstockDAO interface {
	GetAllPrice(ctx context.Context, db *sql.DB, start, end string) (priceList []*model.StockPredicted, err error)
	GetPriceByTicker(ctx context.Context, db *sql.DB, modelName, ticker, start, end string) (priceList []*model.StockPredicted, err error)
	GetTickerRealPrice(ctx context.Context, db *sql.DB, ticker, start, end string) (priceList []*model.RealPrice, err error)
	//	GetPriceByTickers(ctx context.Context, db *sql.DB, ticker []string, start, end string) (priceList []*model.StockPredicted, err error)
}

type stockDAO struct{}

func (s *stockDAO) GetAllPrice(ctx context.Context, db *sql.DB, start, end string) (priceList []*model.StockPredicted, err error) {
	if db == nil {
		return nil, core.ErrDBObjNull
	}

	rows, err := db.QueryContext(ctx, GetAllPriceQuery, start, end)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		var tg = model.StockPredicted{}
		err := rows.Scan(&tg.Ticker, &tg.Price, &tg.Timestamp)
		if err != nil {
			return nil, err
		}
		priceList = append(priceList, &tg)
	}

	err = rows.Err()
	if err != nil {
		return nil, err
	}
	return
}

func (s *stockDAO) GetPriceByTicker(ctx context.Context, db *sql.DB, modelName, ticker, start, end string) (priceList []*model.StockPredicted, err error) {
	if db == nil {
		return nil, core.ErrDBObjNull
	}

	GetPriceByTickerQuery := GetPriceByTickerQueryComponent1 + "predicted_" + modelName + GetPriceBytickerQueryComponent2
	fmt.Println(GetPriceByTickerQuery)
	rows, err := db.QueryContext(ctx, GetPriceByTickerQuery, ticker, start, end)
	if err != nil {
		return nil, err
	}

	defer rows.Close()
	for rows.Next() {
		var tg = model.StockPredicted{}
		err := rows.Scan(&tg.Ticker, &tg.Price, &tg.Timestamp)
		if err != nil {
			return nil, err
		}
		priceList = append(priceList, &tg)
	}

	err = rows.Err()
	if err != nil {
		return nil, err
	}

	return
}

func (s *stockDAO) GetTickerRealPrice(ctx context.Context, db *sql.DB, ticker, start, end string) (priceList []*model.RealPrice, err error) {
	if db == nil {
		return nil, core.ErrDBObjNull
	}

	GetPriceByTickerQuery := GetRealPriceByTickerQueryComponent1 + ticker + GetRealPriceByTickerQueryComponent2
	fmt.Println(GetPriceByTickerQuery)
	fmt.Println("Selecting real price")
	fmt.Println(start)
	fmt.Println(end)
	rows, err := db.QueryContext(ctx, GetPriceByTickerQuery, start, end)
	if err != nil {
		return nil, err
	}
	fmt.Println(rows)

	defer rows.Close()
	for rows.Next() {
		fmt.Println("in here")
		var tg = model.RealPrice{}
		err := rows.Scan(&tg.Close, &tg.Timestamp)
		if err != nil {
			return nil, err
		}
		priceList = append(priceList, &tg)
	}

	err = rows.Err()
	if err != nil {
		return nil, err
	}

	return
}

var sDAO IstockDAO = &stockDAO{}

func SetStockDAO(v IstockDAO) {
	sDAO = v
}

func GetStockDAO() IstockDAO {
	return sDAO
}
