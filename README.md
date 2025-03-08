# Finance Tracker

A full-stack personal finance tracking application built as a learning project to explore modern web development technologies, TypeScript, and cloud services.

## 🎓 Learning Project

This project was created as part of my journey to learn:
- TypeScript/JavaScript development
- Modern web development practices
- Full-stack application architecture
- Cloud services integration
- Docker containerization
- Authentication implementation

## 🚀 Technologies Used

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **@clerk/clerk-react** - Authentication and user management
- **@tanstack/react-table** - Table management and data display
- **React Router** - Client-side routing

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript
- **MongoDB** - Database (Cloud Atlas)
- **Mongoose** - MongoDB object modeling

### DevOps & Tools
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Web server and reverse proxy
- **ESLint** - Code linting
- **Git** - Version control

## 🏗️ Architecture

The application follows a modern microservices architecture:
- Frontend container running React/Vite application
- Backend container running Express/Node.js API
- MongoDB Atlas for cloud database
- Nginx for serving static files and API proxying

## 🛠️ Setup and Installation

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- MongoDB Atlas account (for database)
- Clerk account (for authentication)

### Environment Variables

Create a `.env` file in the root directory with:

```bash
# Client
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key

# Server
MONGO_DB_PASSWORD=your_mongodb_password
```

### Running with Docker

1. Clone the repository:
```bash
git clone https://github.com/yourusername/finance-tracker.git
cd finance-tracker
```

2. Start the application:
```bash
docker-compose up -d
```

The application will be available at:
- Frontend: http://localhost
- Backend API: http://localhost:3001

### Development Without Docker

#### Client
```bash
cd client
npm install
npm run dev
```

#### Server
```bash
cd server
npm install
npm run dev
```

## 🌟 Features

- User authentication with Clerk
- Financial transaction tracking
- Transaction categorization
- Data visualization
- Responsive design
- RESTful API
- MongoDB cloud integration

