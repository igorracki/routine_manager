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

func Tasks(context echo.Context) error {
	tasks := []models.Task{
		{Title: "First Task", Content: "Some content..."},
		{Title: "Second Task", Content: "Other content"},
	}
	return context.JSON(http.StatusOK, tasks)
}
