# **Keeper.me API** 🚀

This is a **RESTful API** built using **NestJS** for managing user transactions. It allows users to create, update, delete, and retrieve financial transactions, including filtering by date range and calculating the balance. The API is designed to be robust, secure, and easy to integrate with front-end applications.

---

## **Table of Contents**

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Environment Variables](#environment-variables)
4. [Running the Application](#running-the-application)
5. [API Endpoints](#api-endpoints)
6. [Authentication](#authentication)
7. [Project Structure](#project-structure)
8. [Improvements](#improvements)
9. [License](#license)

---

## **Features**

- **User Management**:

  - User registration with encrypted passwords using **bcrypt**.
  - User authentication using **JWT** tokens.

- **Transaction Management**:

  - Create, update, delete, and retrieve financial transactions.
  - Filter transactions by **date range** or specific dates.
  - Automatically calculate expenses and income.

- **Balance Calculation**:

  - Returns a **formatted balance** in USD.

- **Security**:

  - Authorization for all endpoints using **JWT Bearer Tokens**.
  - User isolation ensures data security.

- **Performance**:
  - Default behavior limits transaction retrieval to **30 days** to optimize payload size.

---

## **Technologies Used**

- **Node.js** with **NestJS**
- **TypeORM** (PostgreSQL as database)
- **Docker** and **Docker Compose**
- **JWT** for Authentication
- **Swagger** for API Documentation
- **Postman** (for testing)

---

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/)
- [Postman](https://www.postman.com/) or any REST client

---

### **Installation**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/transaction-management-api.git
   cd transaction-management-api
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Set up the environment variables**:
   request the dotenv file by sending a message to:

   higor.leodoro@gmail.com

---

### **Running the Application**

Run the application locally using Docker Compose:

1. **Start the containers**:

   ```bash
   docker-compose up
   ```

2. **Access the application**:
   - Swagger Docs: [http://localhost:3001/api](http://localhost:3001/api)
   - API Base URL: `http://localhost:3001`

---

## **API Endpoints**

### **User Endpoints**

| Method | Endpoint     | Description                 | Body / Query Parameters               |
| ------ | ------------ | --------------------------- | ------------------------------------- |
| POST   | `/users`     | Register a new user         | `{ name, lastName, email, password }` |
| GET    | `/users/:id` | Get user details by ID      | -                                     |
| DELETE | `/users/:id` | Delete user and all records | -                                     |

### **Auth Endpoints**

| Method | Endpoint            | Description         | Body                  |
| ------ | ------------------- | ------------------- | --------------------- |
| POST   | `/auth/login`       | User login          | `{ email, password }` |
| POST   | `/auth/token-login` | Login via JWT token | `{ token }`           |

### **Transaction Endpoints**

| Method | Endpoint                | Description                     | Body / Query Parameters                    |
| ------ | ----------------------- | ------------------------------- | ------------------------------------------ |
| POST   | `/transactions`         | Create a new transaction        | `{ description, value, type }`             |
| GET    | `/transactions`         | List all transactions (30 days) | -                                          |
| GET    | `/transactions/period`  | List transactions by period     | `?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` |
| PATCH  | `/transactions/:id`     | Update a specific transaction   | `{ description, value, type }`             |
| DELETE | `/transactions/:id`     | Delete a specific transaction   | -                                          |
| GET    | `/transactions/balance` | Get the total balance           | -                                          |

---

## **Authentication**

All endpoints, except for `/users` and `/auth/login`, require **JWT Bearer Tokens** for authorization.

### **How to Authenticate**:

1. Register a new user via `POST /users`.
2. Log in using `POST /auth/login` to receive a **JWT Token**.
3. Include the token in the **Authorization** header for all requests:
   ```
   Authorization: Bearer <your_token>
   ```

---

## **Project Structure**

```plaintext
src/
│
├── modules/
│   ├── user/
│   │   ├── user.entity.ts
│   │   ├── user.service.ts
│   │   ├── user.controller.ts
│   │   └── user.dto.ts
│   │
│   ├── auth/
│   │   ├── auth.service.ts
│   │   ├── auth.guard.ts
│   │   └── auth.controller.ts
│   │
│   ├── transaction/
│   │   ├── transaction.entity.ts
│   │   ├── transaction.service.ts
│   │   ├── transaction.controller.ts
│   │   └── transaction.dto.ts
│
├── utils/
│   └── format.date.ts
│
├── main.ts
├── app.module.ts
└── docker-compose.yaml
```

---

## **Improvements**

Some additional features that can be implemented in the future:

- **Pagination**: Add pagination to transaction listing endpoints.
- **Unit and Integration Tests**: Implement tests using Jest.
- **Role-Based Access Control**: Add different user roles (e.g., Admin).
- **Deployment**: Deploy to AWS or Vercel using Docker.

---

## **License**

This project is licensed under the **MIT License**.

---

## **Conclusion**

This API is designed to be **scalable**, **secure**, and easy to maintain. It meets the core requirements for a transaction management system while following industry best practices.

If you have any questions or feedback, feel free to reach out. 🚀
