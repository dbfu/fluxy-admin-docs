#! /bin/sh -e

echo "setting environment config"

cat >> /etc/nginx/conf.d/default.conf <<EOF
 
  server {
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    listen 80;
    server_name _;
    index index.html;

    location / {
        # content location
        root /app/www/;

        # exact matches -> reverse clean urls -> folders -> not found
        try_files \$uri \$uri.html \$uri/ =404;

        # non existent pages
        error_page 404 /404.html;

        # a folder without index.html raises 403 in this setup
        error_page 403 /404.html;

        # adjust caching headers
        # files in the assets folder have hashes filenames
        location ~* ^/assets/ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}

EOF

echo "starting web server"

nginx -g 'daemon off;'
