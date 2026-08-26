# InternGrow Task 1 - Authentication & User Management API

A secure authentication and user management REST API built for the InternGrow Backend Development Track (Week 1).

## Features

- User Registration with email verification
- Login with JWT authentication
- Password hashing with bcrypt
- Forgot Password / Reset Password via email
- Profile update
- Change password
- Role-Based Access Control (Admin/User)

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Nodemailer (Gmail SMTP)

## Getting Started

### Prerequisites

- Node.js installed
- A MongoDB Atlas account (or local MongoDB instance)
- A Gmail account with an App Password generated (for sending emails)

### Installation

1. Clone the repository

2. Install dependencies

3. Create a `.env` file in the root directory with the following variables:

4. Start the development server

The server will run on `http://localhost:5000`.

## API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|--------------|----------------|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Login and receive a JWT | No |
| GET | `/api/auth/profile` | Get logged-in user's profile | Yes |
| PUT | `/api/auth/profile` | Update logged-in user's profile | Yes |
| PUT | `/api/auth/change-password` | Change password | Yes |
| GET | `/api/auth/users` | Get all users (admin only) | Yes (Admin) |
| POST | `/api/auth/forgot-password` | Request a password reset email | No |
| PUT | `/api/auth/reset-password/:token` | Reset password using token | No |
| GET | `/api/auth/verify-email/:token` | Verify email using token | No |

