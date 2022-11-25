FROM node
WORKDIR /app_backend
COPY package*.json .
RUN npm install
COPY . .

CMD [ "npm", "run", "dev"  ]