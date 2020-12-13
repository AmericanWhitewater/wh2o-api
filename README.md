# wh2o-api

American Whitewater's REST API built with Laravel.
### System Requirements

- php
- composer
- docker desktop

## Getting Started

- Clone repo
- cd to project root
- `docker-compose up -d`
- `composer install`
- `php artisan key:generate`
- `php artisan jwt:secret`
- `php artisan migrate:fresh --seed`
- `php artisan serve`