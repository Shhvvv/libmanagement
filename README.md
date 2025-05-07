# Library Management System

A comprehensive ERP-based Library Management System with role-based access control, maintenance modules, and robust security features.

## Features

- Role-based access control (Admin and User roles)
- Secure authentication using JWT
- Maintenance module for admin users
- Book management system
- Category management
- User management
- Transaction tracking
- Reporting system

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Validation**: Express Validator
- **Password Hashing**: bcryptjs

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd library-management-system
```

2. Install dependencies:
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
```

3. Create a `.env` file in the root directory and add the following:
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/library_management
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=24h
```

4. Start the development server:
```bash
# Run backend server
npm run dev

# Run frontend server (in a separate terminal)
cd client
npm start
```

## Project Structure

```
library-management-system/
├── client/                 # React frontend
├── config/                 # Configuration files
├── controllers/           # Route controllers
├── middleware/           # Custom middleware
├── models/               # Database models
├── routes/               # API routes
├── .env                  # Environment variables
├── .gitignore           # Git ignore file
├── package.json         # Project dependencies
├── README.md           # Project documentation
└── server.js           # Entry point
```

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user

### Maintenance (Admin Only)
- GET /api/maintenance/dashboard - Get maintenance dashboard
- POST /api/maintenance/books - Add new book
- PUT /api/maintenance/books/:id - Update book
- DELETE /api/maintenance/books/:id - Delete book
- POST /api/maintenance/categories - Add new category
- PUT /api/maintenance/categories/:id - Update category
- DELETE /api/maintenance/categories/:id - Delete category

## Security Features

- Password hashing using bcryptjs
- JWT authentication
- Role-based access control
- Input validation
- Error handling
- Session management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details 