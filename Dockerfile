# Gunakan node versi ringan
FROM node:18-alpine

# Set folder kerja di dalam container
WORKDIR /app

# Salin package.json dan install library
COPY package*.json ./
RUN npm install

# Salin seluruh source code
COPY . .

# Ekspos port yang digunakan aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
