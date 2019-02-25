# WeHungry

[![Build Status](https://travis-ci.org/chidexebere/WeHungry.svg?branch=develop)](https://travis-ci.org/chidexebere/WeHungry)

[![Coverage Status](https://coveralls.io/repos/github/chidexebere/WeHungry/badge.svg?branch=master)](https://coveralls.io/github/chidexebere/WeHungry?branch=master)

## Summary

WeHungry is an meal ordering web app that provides restuarants and caterers the opportunity to make money from their culinary expertise and also let hungry customers enjoy their exquisite dishes.

### Overview

- Caterers and Customers can create an account to access the application
- Caterers are able to manage meal options and setup menu for the day from their dashboard
- Customers with user accounts will get notifications for the menu for the day, select an option out of the menu and change their meal choice
- Caterers are able to see the orders froms customers including the order history and total amount they make daily
- Customers with user accounts will see their order history on their dashboard

## Running using local machine

- Pull the develop branch off this repository

###### Install project dependancies

```Install project dependancies
# npm install
```

#### Start the app

```
# npm start
```

This will start the app at `http://localhost:7001`.

## API Endpoints

- GET api/v1/meals/ Caterers can get all meals options they uploaded
- POST api/v1/meals/ Catereres can add meal options linked to their account
- PUT api/vi/meals/:id Caterers can update their meal options
- DELETE api/v1/meals/:id Caterers can delete their meal options
- GET api/v1/menus/ Caterers and Users can Get the menu for the day
- POST api/v1/menus/ Caterers can Set a menu for the day
- GET api/v1/orders Get All Orders
- POST api/v1/orders Users can make orders
- PUT api/v1/orders/:id Users can modify their orders

## Test API

`https://wehungry-api.herokuapp.com`

## UI

`https://chidexebere.github.io/WeHungry/UI`
