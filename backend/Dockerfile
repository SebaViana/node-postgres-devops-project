# Use the official Node.js image with Alpine Linux
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install sequelize-cli globally
RUN npm install -g sequelize-cli

# Copy the rest of the application code, including start.sh
COPY . .

# Make sure start.sh is executable
RUN chmod +x start.sh

# Expose the port the app runs on
EXPOSE 3000

# Use a shell to run the start.sh script
CMD ["sh", "start.sh"]

