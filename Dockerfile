FROM php:8.2-apache

# Installation des extensions PHP nécessaires pour MySQL
RUN docker-php-ext-install pdo pdo_mysql

# Activation du module rewrite d'Apache (pour ton .htaccess)
RUN a2enmod rewrite

# Copie de tout ton code dans le dossier du serveur
COPY . /var/www/html/

# Permissions
RUN chown -R www-data:www-data /var/www/html/

# Port utilisé par Render
EXPOSE 80