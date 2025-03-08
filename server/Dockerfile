FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3001

# Command to run the application
CMD ["node", "./build/src/index.js"] 