# Verwenden Sie eine offizielle Node.js-Runtime als Basisimage
FROM node:20

# Setzen Sie das Arbeitsverzeichnis in Ihrem Docker-Container
WORKDIR /usr/src/app

# Kopieren Sie die Datei package.json und package-lock.json in das Arbeitsverzeichnis
COPY package*.json ./

# Installieren Sie die Abhängigkeiten des Projekts
RUN npm install

# Kopieren Sie den Rest des Projektcodes in das Arbeitsverzeichnis
COPY . .

# Bauen Sie das Next.js-Projekt
RUN npm run build

# Setzen Sie die Umgebungsvariable für den Produktionsmodus
ENV NODE_ENV production

# Öffnen Sie Port 3000
EXPOSE 3000

# Führen Sie das Next.js-Projekt aus
CMD ["npm", "start"]
