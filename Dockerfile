FROM node:18-alpine
WORKDIR /app
# Copy package dulu untuk optimasi cache layer Docker
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
