# Node js server

This proyect is a node js server boilersplate. This boilersplate will be based in the POO 4 layers architecture and will try to respect the SOLID principle as much as posible. 

# Architecture

( 4 layers )
Original 4 layers for OOP :

* User Interface
    Front End 
* Business Logic
    Logic of the application
* Mappers / Data Access Objects
    Mapping Database objects into Business Entities Types
* Data access Layer
    Helpers to connect to de database

## Routes

    Is the currently Server front end, expose some Route and return a response.

    Routes respect the current file system of the folder Route implementing the RouterFactory class.

## Models
    Is the currently Business Logic of the application

    It should have only business algorithms.

## Mappers (Not Done)

    Not done yet. It will get and set objects from the DB.

## Data Access Layer (DAL) (Not Done)

    Will perfom the conenection to a DB


