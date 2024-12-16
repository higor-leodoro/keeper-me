# **Keeper.me** 🚀

Keeper.me is a complete **transaction management system**, consisting of:

1. **Backend API** (NestJS): A RESTful API for user authentication, transaction creation, balance calculations, and filtering.
2. **Frontend Mobile App** (React Native + Expo): A user-friendly mobile interface with animations and form validation.

---

## **Table of Contents**

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Backend API](#backend-api)
4. [Frontend Mobile](#frontend-mobile)
5. [Getting Started](#getting-started)
   - [Backend Installation](#backend-installation)
   - [Frontend Installation](#frontend-installation)
6. [Running the Project](#running-the-project)
7. [Project Structure](#project-structure)
8. [Future Improvements](#future-improvements)
9. [License](#license)

---

## **Features**

### **Backend Features**

- **User Management**: Register, login, and manage users with JWT-based authentication.
- **Transaction Management**:
  - Add, update, and delete financial transactions.
  - Filter transactions by date or period.
- **Balance Calculation**: Automatically calculate and format total expenses/income.

### **Frontend Features**

- **Authentication**: User-friendly login and signup screens.
- **Transaction Management**:
  - Create and display transactions.
  - Filter transactions by predefined periods (30, 60, 90 days) or custom dates.
- **Animations**: Smooth animations using **Reanimated**.
- **Validation**: Form validation powered by **react-hook-form** and **Zod**.
- **State Management**: Efficient state handling with **Zustand**.

---

## **Technologies Used**

### **Backend**

- Node.js + NestJS
- TypeORM + PostgreSQL
- Docker + Docker Compose
- JWT Authentication
- Swagger Documentation

### **Frontend**

- React Native + Expo
- Zustand (State Management)
- React Hook Form + Zod (Form Validation)
- React Navigation (Routing)
- Reanimated + Lottie (Animations)

---

## **Backend API**

The backend exposes RESTful endpoints documented via **Swagger**.

### **Backend Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/keeper-me-backend.git
   cd keeper-me-backend
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up environment variables:  
   Use the provided `.env` file.

4. Run the backend server:
   ```bash
   docker-compose up
   ```

- **API URL**: `http://localhost:3001`
- **Swagger Docs**: [http://localhost:3001/api](http://localhost:3001/api)

---

## **Frontend Mobile**

The mobile app is developed using **Expo** for cross-platform compatibility.

### **Frontend Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/keeper-me-frontend.git
   cd keeper-me-frontend
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Run the Expo app:

   ```bash
   yarn dev
   ```

4. Run on specific devices:
   - **Android**:
     ```bash
     yarn android
     ```
   - **iOS**:
     ```bash
     yarn ios
     ```

### **Frontend Structure**

```plaintext
src/
|
├── assets/         # Static assets (images, animations)
├── components/     # Reusable UI components (buttons, inputs)
├── constants/      # Colors, global styles
├── router/         # Navigation configuration
├── screens/        # Screens (Login, Register, Dashboard)
├── services/       # API service layer using Axios
├── stores/         # State management (Zustand)
├── App.tsx         # Entry point for the app
├── index.ts        # Expo configuration
└── styles/         # Global stylesheets
```

---

## **Running the Project**

### **Step 1: Backend**

1. Run the backend using Docker Compose:

   ```bash
   docker-compose up
   ```

2. Verify that the API is running at `http://localhost:3001`.

---

### **Step 2: Frontend**

1. Start the Expo development server:

   ```bash
   yarn dev
   ```

2. Test on your preferred device:
   - Android Emulator
   - iOS Simulator
   - Expo Go App on a physical device

---

## **Future Improvements**

- **API Pagination**: Implement pagination in transaction listing.
- **Dark Mode**: Add a dark mode feature for the app.
- **Notifications**: Implement push notifications using Expo.
- **CI/CD**: Automate deployments for the API and mobile app.

---

## **License**

This project is licensed under the **MIT License**.

---

## **Conclusion**

Keeper.me is a full-stack project providing robust backend services and an intuitive mobile frontend for managing financial transactions. It's built with scalability, performance, and user experience in mind.

For questions or contributions, feel free to reach out:  
**Higor Leodoro** – higor.leodoro@gmail.com 🚀
