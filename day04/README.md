# Day 04 - Frontend boot camp

Creating a server using the Express framework, connecting a database to the server, implementing a REST API, using Postman for testing, using the ORM Sequelize, Node.js, and implementing CRUD (Create, Read, Update, Delete) operations.

## **Task 1**

Imagine a client has come to you with a request to develop an internal application for restaurant employees. In the first stage, you need to create a database for the future application. [The client has provided a technical specification ](./src/chapter_2/Exercise_1.md). The task instructions and recommendations are provided in the technical specification.

## **Task 2**

Now you need to create a service by connecting your database from the previous task to a small Express server that you will write.

The following endpoints should be handled: \
`-` GET /menu — the client can view the menu and everything it contains. \
`-` POST /orders — create an order. \
`-` PUT /orders/id — edit an order. \
`-` DELETE /orders/id — close an order (for closure, we recommend not deleting the record from the table but simply changing one of the fields from true to false). \
`-` GET /orders — get all current orders from the restaurant. \
`-` POST /waiters — the ability to add a new employee.

## Solution

[src files](src/chapter_2/)

To clear the database, perform a migration, and populate it with seeds, execute the following command:

```
npm run dbr
```

To start server on http://localhost:3000/:

```
npm run start
```
