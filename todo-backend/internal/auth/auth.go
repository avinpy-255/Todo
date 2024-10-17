package auth

import (
	"log"
	"os"

	"github.com/gorilla/sessions"
	"github.com/joho/godotenv"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/google"
)

const (
	key    = "putrisdshnm" // Encryption key for session store
	MaxAge = 86400 * 30    // 30 days cookie expiration
	IsProd = false         // Whether the app is running in production
)

func Auth() {
	// Load .env file for environment variables
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Fetch Google OAuth credentials from environment variables
	googleClientId := os.Getenv("GOOGLE_CLIENT_ID")
	googleClientSecret := os.Getenv("GOOGLE_CLIENT_SECRET")

	// Check if Google credentials are set
	if googleClientId == "" || googleClientSecret == "" {
		log.Fatal("Google OAuth credentials are missing. Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env")
	}

	// Create a new session store
	store := sessions.NewCookieStore([]byte(key))
	store.MaxAge(MaxAge)          // Set cookie max age
	store.Options.Path = "/"      // Set cookie path
	store.Options.HttpOnly = true // Only accessible via HTTPS
	store.Options.Secure = IsProd // Set secure flag in production

	// Set the store for Goth's session handling
	gothic.Store = store

	// Using Google provider
	goth.UseProviders(
		google.New(
			googleClientId,
			googleClientSecret,
			"http://localhost:3000/auth/google/callback", // OAuth callback URL
		),
	)

	log.Println("Google OAuth provider configured successfully")
}
