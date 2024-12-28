package handler

import (
	"net/http"
	"sledzior/routine_manager/internal/models"

	"github.com/labstack/echo/v4"
)

func Home(context echo.Context) error {
    index := &models.Index{
        Message: "OK!",
    }
    return context.JSON(http.StatusOK, index)
}
