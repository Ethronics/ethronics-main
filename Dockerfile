# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the project
RUN npm run build

# Expose port 5173 for Vite
EXPOSE 5173

# Start the app
CMD ["npm", "run", "preview"]
