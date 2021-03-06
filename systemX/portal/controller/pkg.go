package controller

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"reflect"

	"portal/core"
	"portal/model"

	"github.com/labstack/echo"
)

// ResponseError response error struct
type ResponseError struct {
	Code    int
	Message string
}

// Response response struct
type Response struct {
	Error ResponseError
	Data  interface{}
}

// SetData set data attached to response
func (c *Response) SetData(_dat interface{}) {
	c.Data = _dat
}

// SetCodeMessage set code message
func (c *Response) SetCodeMessage(code int, message string) {
	c.Error.Code = code
	c.Error.Message = string(message)
}

// ExecHandler execute handler
func ExecHandler(c echo.Context, expect interface{}, invoke func(c echo.Context, req interface{}) (int, interface{}, *model.LogFormat, bool, error)) error {
	var payload []byte
	var err error

	body := c.Request().Body
	defer func() {
		_ = body.Close()
	}()

	if payload, err = ioutil.ReadAll(body); err != nil {
		return c.JSON(http.StatusOK, &Response{
			Error: ResponseError{
				Code:    http.StatusInternalServerError,
				Message: err.Error(),
			}})
	}

	fmt.Println(reflect.TypeOf(expect))
	if expect != nil { // parse req
		if err = json.Unmarshal(payload, expect); err != nil {
			return c.JSON(http.StatusOK, &Response{
				Error: ResponseError{
					Code:    http.StatusBadRequest,
					Message: core.ErrBadRequest.Error(),
				}})
		}
	}

	statusCode, data, lg, logRespData, err := invoke(c, expect)
	if err != nil {
		core.LogErr(err)
		return c.JSON(http.StatusOK, &Response{
			Error: ResponseError{
				Code:    statusCode,
				Message: err.Error(),
			},
		})
	}

	if lg != nil {
		if logRespData {
			lg.Success = data
		}
		core.LogInfo(lg)
	}

	fmt.Println(data)
	/*
		return c.JSON(http.StatusOK, &Response{
			Data: data,
			Error: ResponseError{
				Code: http.StatusOK,
			},
		})
	*/
	return c.JSON(http.StatusOK, data)
}
