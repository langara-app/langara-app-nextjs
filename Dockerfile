# Use an official Node.js runtime as a parent image
FROM node:12.13.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install project dependencies using Yarn
RUN yarn install

# Copy the rest of your application code to the working directory
COPY . .


# Expose the port that the app will run on (usually 3000)
EXPOSE 3000

# Command to start your Next.js app
CMD [ "yarn", "dev" ]
