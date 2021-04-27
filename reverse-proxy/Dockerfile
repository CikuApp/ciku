FROM nginx
RUN rm /usr/share/nginx/html/*
COPY default.conf /etc/nginx/conf.d/default.conf
COPY snippets/self-signed.conf /etc/nginx/snippets/self-signed.conf
RUN mkdir -p /etc/ssl
COPY certs/ /etc/ssl/certs
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
