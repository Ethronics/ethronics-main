# Use Node.js as base image
FROM node:23-alpine

# Set working directory
WORKDIR /app

# Copy only package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Expose port (Vite default)
EXPOSE 5173

# Start Vite development server
CMD ["npm", "run", "dev"]
