FROM node:22-alpine3.19
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
