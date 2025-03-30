# Use a full Node.js image instead of Alpine for stability
FROM node:18 AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy app files
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]