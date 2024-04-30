
**Application ID**: 29460304
**Name**: Mohammad Zimam Sayeed
___

## Problem Statement:
Designing a Grocery Booking API
___

***Roles:***
- [x] **Admin**: This is separated on the api endpoint level as well as on the authentication level
If you were to check the ```src/middleware/authMiddleware.ts``` file, you will see that there are separate token (presently hardcoded) for user and admin which can be changed with something like **JWT tokens** in the future. 
- [x] **User**: This is seperated on the api endpoint as well as on the authentication level. 


**Design API endpoints**:

1. **Admin Responsibilities:**
	- [x] Add new grocery items to the system
	```bash
	curl --location 'localhost:3000/admin/add' \
		--header 'authorization: admin-token' \
		--header 'Content-Type: application/json' \
		--data  '{
			"name": "Potato",
			"price": 100,
			"inventoryCount": 60
		}'
	```
	- [x] View existing grocery items
	```bash
	curl --location 'localhost:3000/admin/view' \
		--header 'authorization: admin-token'
	```
	- [x] Remove grocery items from the system (passing the ID of the item)
	```bash
	curl --location --request DELETE 'localhost:3000/admin/delete/1' \
		--header 'authorization: admin-token'
	```
	- [x] Update details (e.g., name, price) of existing grocery items
	- [x] Manage inventory levels of grocery items (Update API)
	```bash
	curl --location --request PUT 'localhost:3000/admin/update/1' \
		--header 'authorization: admin-token' \
		--header 'Content-Type: application/json' \
		--data '{
		    "name": "Riped Potato",
		    "inventoryCount": 5
		}'
	```

2. **User Responsibilities:**
	- [x] View the list of available grocery items
	```bash
	curl --location 'localhost:3000/user/list' \
		--header 'authorization: user-token'
	```
	- [x] Ability to book multiple grocery items in a single order
	```bash
	curl --location 'localhost:3000/user/book' \
		--header 'authorization: user-token' \
		--header 'Content-Type: application/json' \
		--data '{
		    "items": [
		        {
		            "id": 1,
		            "quantity": 6
		        }
		    ]
		}'
	```
___

## How to run the application?
Clone the repository:
```bash
git clone <url>
```
Install the dependencies:
```bash
npm install
```
***Note:*** I have used Node v20.12.2

Now there are two ways of running the project:
1. Running it locally
2. Running on the docker

### 1. Running the project locally
Requisites:
- MySQL database running locally. I used XAMPP to run the Apache server and run the MySQL on it. 
- Have NodeJs v20 installed
- Create a .env file in the root directory with the following values:
	```
	DB_HOST=localhost
	DB_USER=root
	DB_PASS=
	DB_NAME=grocery_store_test
	```

Running the application:
After installing the dependecies as stated in the above steps, run this command to run the application locally:
```bash
npm run dev
```
You should get the following logs which shows the application is running successfully:
```
> dev
> nodemon src/app.ts

[nodemon] 3.1.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/app.ts`
Executing (default): SELECT 1+1 AS result
DB connection has been established successfully.
Server running on port 3000
GroceryItem table created
```
***Note***: Everytime we run the project, it creates a **new tables** since that is the case in the development environment. That can be **changed** when going into production.

### 2. Running on the docker
Requisites:
- Yxou should have docker and docker-compose installed. You can check the installation in your command line using the following command:\
	```bash
	docker-compose --version
	```
- MySQL database running locally. I used XAMPP to run the Apache server and run the MySQL on it.
- Have NodeJs v20 installed
- Create a .env file in the root directory with the following values:
    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=
    DB_NAME=grocery_store_test
    ```
- To run the application in the docker you can run either of the commands:
	```bash
	npm run docker 
	```
	OR
	```bash
	docker-compose up --build
	```

#### API endpoints and example for each of the functionality is given below!

## Thank you!


***Mandatory Requirements:***

- [x] If you have applied for Fullstack Node position, please use *typescript*.




**Advanced Challenge:**
- [x] Containerize the application using Docker for ease of deployment and scaling.
Check the `Dockerfile` and `docker-compose.yml` file in the root directory for the implementation. 

**Database:**
- [x] Use any relational database of your choice:
	Using **MySQL** for this project