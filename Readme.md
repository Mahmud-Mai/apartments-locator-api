# Apartments Locator Mobile App (Backend)

This repo is a backend for the Apartments Locator Mobile App.

The Apartments Locator Mobile App is designed to help users find apartments for rent. It provides a user-friendly interface to browse, filter, and locate apartments based on various criteria such as type, location, and price. Users can also view property details and get navigation directions to their desired apartments.

## Prerequisites

To run this application, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your machine. You can download it from https://nodejs.org/.
- MongoDB URL: Contact the developer for it.

## Getting Started

```bash
git clone https://github.com/Mahmud-Mai/apartments-locator-api.git
cd apartments-locator-api
npm install

# Create a .env file in the project root and add your MongoDB connection URL
# contact developer for the url
MONGO_URL=your-mongodb-connection-url

npm start


## API Endpoints

The API endpoints for the application are defined in the `routes` directory. These endpoints allow you to perform CRUD (Create, Read, Update, Delete) operations on apartments.

**Endpoints:**

* GET `/apartments`: Get a list of all apartments.
* POST `/apartments`: Create a new apartment.
* GET `/apartments/:id`: Get details of a specific apartment.
* PUT `/apartments/:id`: Update an existing apartment.
* DELETE `/apartments/:id`: Delete an apartment.

## Usage

To create an apartment, send a POST request to the `/apartments` endpoint with the following body:

json
{
    "name": "Gidan Yara Room 03",
    "description": "Good offcare just 2 mins walk from the North Gate",
    "address": "No 8 Zaria-Funtua Expressway, Samaru Zaria",
    "neighbourhood": "Samaru",
    "price": "220000",
    "images": "https://cdn.create.vista.com/api/media/small/43859541/stock-photo-apartment-complex-exterior",
    "type": "1 bedroom self-contained"
}


## Validation

Data validation is implemented in middleware functions to ensure that user input is correct and meets the required criteria. For example, price is validated to ensure it's a positive number, and neighbourhood and apartment type are checked for valid values.
```
