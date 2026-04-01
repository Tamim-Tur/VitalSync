# Utilisation de l'image officielle Nginx Alpine
FROM nginx:alpine

# Copie du fichier HTML vers le dossier servi par Nginx
COPY index.html /usr/share/nginx/html/index.html

# Copie de la configuration personnalisée pour le proxy API
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
