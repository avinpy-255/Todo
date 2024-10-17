package main

import (
	"todo-backend/internal/auth"
	"todo-backend/internal/server"
)

func main() {

	auth.Auth()
	server := server.NewServer()

	err := server.ListenAndServe()
	if err != nil {
		panic("cannot start server")
	}
}
