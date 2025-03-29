# Use Node.js as base image
FROM node:23-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy project files
COPY . .

# Expose port
EXPOSE 5173

# Run Vite development server
CMD ["npm", "run", "dev"]
