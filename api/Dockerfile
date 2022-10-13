FROM composer as builder

WORKDIR /app

COPY composer.json .
RUN composer install --no-scripts --no-dev
COPY . .
RUN composer dump-autoload

FROM php:8.1-fpm

RUN docker-php-ext-install \
    pdo_mysql

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

COPY --from=builder /app /var/www/html
RUN chown -R www-data:www-data /var/www/html
RUN chmod 775 /var/www/html/storage
