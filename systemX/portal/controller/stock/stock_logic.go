package stock

import (
	"fmt"
	"net/http"
	"portal/core"
	"portal/dao"
	"portal/model"
	"strings"

	"github.com/labstack/echo"
)

func getAllPredictedPrice(c echo.Context, request interface{}) (statusCode int, data interface{}, lg *model.LogFormat, logResponse bool, err error) {
	ctx := c.Request().Context()
	req := request.(*model.AllRequest)
	lg = &model.LogFormat{Source: c.Request().RemoteAddr, Action: "Get all price"}
	db := core.GetDB()
	sDAO := dao.GetStockDAO()

	res, err := sDAO.GetAllPrice(ctx, db, req.From, req.To)
	if err != nil {
		statusCode = http.StatusInternalServerError
		return
	}

	return http.StatusOK, res, lg, false, nil
}

func getPredictedPriceByTicket(c echo.Context, request interface{}) (statusCode int, data interface{}, lg *model.LogFormat, logResponse bool, err error) {
	req, ctx := request.(*model.TicketRequest), c.Request().Context()
	lg = &model.LogFormat{Source: c.Request().RemoteAddr, Action: "Get price by ticker "}
	db := core.GetDB()
	//conf := core.GetConfig()
	sDAO := dao.GetStockDAO()

	fmt.Println(req)
	froms := strings.Split(req.From, "/")
	tos := strings.Split(req.To, "/")
	from := froms[2] + "-" + froms[0] + "-" + froms[1]
	to := tos[2] + "-" + tos[0] + "-" + tos[1]
	fmt.Println(from)
	fmt.Println(to)

	var resp = &model.GetPriceByTickerResp{}

	realPrice, err := sDAO.GetTickerRealPrice(ctx, db, req.Name, from, to)
	//realPrice, err := sDAO.GetTickerRealPrice(ctx, db, req.Name, req.From, req.To)
	if err != nil {
		statusCode = http.StatusInternalServerError
		return
	}

	fmt.Println("real price")
	fmt.Println(realPrice)
	/*
		var predicted [][]*model.StockPredicted
		for i := 0; i < len(conf.ModelName); i++ {
			var tmp []*model.StockPredicted
			tmp, err = sDAO.GetPriceByTicker(ctx, db, conf.ModelName[i], req.Name, from, to)
			//tmp, err = sDAO.GetPriceByTicker(ctx, db, conf.ModelName[i], req.Name, req.From, req.To)
			if err != nil {
				statusCode = http.StatusInternalServerError
				return
			}
			predicted = append(predicted, tmp)
		}
	*/
	var respRealPrice []float32
	var timestamps []string
	var predicted1, predicted2 []float32

	for i := 0; i < len(realPrice); i++ {
		respRealPrice = append(respRealPrice, realPrice[i].Close)

		// enable for testing purpose
		timestamps = append(timestamps, realPrice[i].Timestamp)
		predicted1 = append(predicted1, realPrice[i].Close)
		predicted2 = append(predicted2, realPrice[i].Close)
	}

	/*
		for i := 0; i < len(predicted[0]); i++ {
			timestamps = append(timestamps, predicted[0][i].Timestamp)
			predicted1 = append(predicted1, predicted[0][i].Price)
			predicted2 = append(predicted2, predicted[1][i].Price)
		}
			if len(realPrice) < len(predicted[0]) {
				for i := 0; i < len(predicted[0])-len(realPrice); i++ {
					respRealPrice = append(respRealPrice, 0)
				}
			} else {
				if len(realPrice) == len(predicted[0]) {
					// do nothing
				} else {
					var predicted1Filter, predicted2Filter []float32
					for i := 0; i < len(realPrice)-len(predicted[0]); i++ {
						predicted1Filter = append(predicted1Filter, 0)
						predicted2Filter = append(predicted2Filter, 0)
					}
					predicted1Filter = append(predicted1Filter, predicted1...)
					predicted2Filter = append(predicted2Filter, predicted2...)

					predicted1 = predicted1Filter
					predicted2 = predicted2Filter
				}
			}
	*/
	resp.Ticker = req.Name
	resp.Timestamp = timestamps
	resp.ActualPrice = respRealPrice
	resp.PriceModel1 = predicted1
	resp.PriceModel2 = predicted2

	return http.StatusOK, resp, lg, false, nil
}

/*
func getPredictedPriceByTickets(c echo.Context, request interface{}) (statusCode int, data interface{}, lg *model.LogFormat, logResponse bool, err error) {
	req, ctx := request.(*model.ManyTicketsRequest), c.Request().Context()
	lg = &model.LogFormat{Source: c.Request().RemoteAddr, Action: "Get all price"}
	db := core.GetDB()
	sDAO := dao.GetStockDAO()

	var resp [][]*model.StockPredicted
	for i := 0; i < len(req.Names); i++ {
		res, err := sDAO.GetPriceByTicker(ctx, db, req.Names[i], req.From, req.To)
		if err != nil {
			statusCode = http.StatusInternalServerError
			break
		}
		resp = append(resp, res)
	}

	return statusCode, resp, lg, false, err
}
*/
