# Finance Tracker

A full-stack finance tracking application with a React frontend and Express backend.

## Docker Setup

This project is containerized using Docker, making it easy to run both the client and server components together.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Environment Variables

The project uses environment variables for configuration. These are stored in the `.env` file at the root of the project.

- `VITE_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key for authentication
- `MONGO_DB_PASSWORD`: Password for MongoDB Atlas connection

### Running with Docker Compose

1. Clone the repository
2. Navigate to the project root directory
3. Run the following command to start both client and server:

```bash
docker-compose up
```

This will:
- Build the client and server Docker images
- Start the containers
- Connect them via a Docker network
- Expose the client on port 80 and the server on port 3001

To run in detached mode (in the background):

```bash
docker-compose up -d
```

To stop the containers:

```bash
docker-compose down
```

### Accessing the Application

- Frontend: http://localhost
- Backend API: http://localhost:3001

### Troubleshooting

If you encounter build issues:

1. **TypeScript Errors**: The client Dockerfile is configured to ignore TypeScript errors during the build process. If you're still seeing TypeScript errors, you can modify the `build:docker` script in the client's package.json.

2. **MongoDB Connection**: The server is configured to connect to MongoDB Atlas. Make sure your MongoDB Atlas credentials are correct in the `.env` file.

3. **Rebuilding Images**: If you need to rebuild the Docker images from scratch, use:
   ```bash
   docker-compose build --no-cache
   ```

## Development Without Docker

### Client

```bash
cd client
npm install
npm run dev
```

### Server

```bash
cd server
npm install
npm run dev
```

## Project Structure

- `/client`: React frontend built with Vite
- `/server`: Express backend with MongoDB connection 