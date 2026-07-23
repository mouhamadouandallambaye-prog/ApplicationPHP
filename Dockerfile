FROM php:8.2-apache

# Installation des extensions pour MySQL
RUN docker-php-ext-install pdo pdo_mysql

# Activation du module de réécriture pour le .htaccess
RUN a2enmod rewrite

# Copie du projet (maintenant léger) dans le serveur
COPY . /var/www/html/

# Permissions pour l'upload des photos de profil
RUN chown -R www-data:www-data /var/www/html/public/images/users/

# Port d'écoute
EXPOSE 80