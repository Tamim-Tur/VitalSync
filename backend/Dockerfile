# Multi-stage build pour VitalSync (Node.js)
# Justification : Le multi-stage build permet de séparer l'environnement de build (tests, outils) 
# de l'environnement de production, garantissant une image finale plus légère (Alpine) et 
# plus sécurisée (moins d'outils sensibles installés).

# Stage 1 : Build & Tests
FROM node:20-alpine AS builder

WORKDIR /app

# On copie les manifestes pour installer les dépendances
COPY package*.json ./
RUN npm install

# On copie tout le code
COPY . .

# On exécute les tests (Jest) - Sera bloquant si un test échoue
RUN npm test

# Stage 2 : Image de production légère
FROM node:20-alpine

WORKDIR /app

# On ne copie que les fichiers nécessaires de l'étape précédente
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/server.js .

# On installe seulement les dépendances de production
RUN npm install --only=production

EXPOSE 3000

# Commande pour lancer l'API
CMD ["npm", "start"]
