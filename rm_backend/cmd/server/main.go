package main

import (
	"net/http"
	"sledzior/routine_manager/api/handler"

	"github.com/labstack/echo/v4/middleware"
	"github.com/labstack/echo/v4"
)

func main() {
	server := echo.New()
	addRoutes(*server)
	server.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{http.MethodGet, http.MethodHead, http.MethodPut, http.MethodPatch, http.MethodPost, http.MethodDelete},
	}))
	server.Logger.Fatal(server.Start(":8080"))
}

func addRoutes(server echo.Echo) {
	server.GET("/", handler.Home)
}
