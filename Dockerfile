# Menggunakan base image nginx versi ringan
FROM nginx:alpine

# Menyalin file index.html ke dalam folder default Nginx
COPY index.html /usr/share/nginx/html/index.html
