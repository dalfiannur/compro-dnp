FROM httpd:latest-alpine

COPY ./dist/ /usr/local/apache2/htdocs/