
API Documentation

1. Authentication API

Endpoint: POST http://localhost:5000/register

Description: Register a new user.
Request Body:

{
  "username": "exampleUser",
  "password": "examplePassword"
}

Response:
Success (201):


{
  "message": "User registered successfully."
}

Error (400):


{
  "message": "Error registering user"
}

Endpoint: POST http://localhost:5000/login

Description: Login a user.
Request Body:


{
  "username": "exampleUser",
  "password": "examplePassword"
}

Response:
Success (200):


{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Error (401):


{
  "message": "Invalid credentials"
}


2. Financial API

Endpoint: GET http://localhost:5000/financials

Description: Get financial data, including total revenue, expenses, and profit margin.

Headers:
Authorization: Bearer <token>

Response:
Success (200):


{
  "totalRevenue": 10000,
  "totalExpenses": 5000,
  "profitMargin": 5000
}

Error (500):


{
  "message": "Error fetching financial data"
}

setup instructions

Install the dependencies
  npm install

Start the Server

  node index.js

Seed the database with data
  
  node seeder.js