markdown

# Mini-Loan App

## Overview

The Mini-Loan App is a web application that allows authenticated users to apply for loans, which can then be approved by admins. Once a loan is approved, users can submit weekly repayments towards the loan amount. The app is built using the MERN (MongoDB, Express.js, React, Node.js) stack.

## Features

- **Loan Application:** Users can submit a loan request specifying the amount and term.
- **Loan Approval:** Admins can approve pending loan requests.
- **Loan Repayments:** Users can submit weekly repayments towards their approved loans.
- **Loan Status Tracking:** The app tracks the status of each loan and repayment.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies:
   - Server: `cd server && npm install`
   - Client: `cd client && npm install`
3. Set up environment variables:
   - Create a `.env` file in the server directory.
   - Add the following variables to the `.env` file:

     PORT=4000
     MONGO_URI=<your-mongodb-uri>
4. Run the server: `npm run dev` in the server directory.
5. Run the client: `npm start` in the client directory.
6. Access the app at `http://localhost:3000`.

## API Endpoints

- **POST /api/loans/create:** Create a new loan request.
- **GET /api/loans/:userId:** Get all loans belonging to a user.
- **GET /api/loans/pending:** Get all pending loans.
- **PUT /api/loans/approve/:loanId:** Approve a pending loan.
- **POST /api/repayments/create:** Add a new repayment.
- **GET /api/repayments/:loanId:** Get all repayments for a loan.

## Technologies Used

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **State Management:** React Context API

## Future Enhancements

- Implement date validation for repayments.
- Improve UI/UX for better user experience.
