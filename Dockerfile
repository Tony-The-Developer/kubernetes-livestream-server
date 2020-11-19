FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .
RUN chmod 777 -R /usr/src/app/ffmpeg
EXPOSE 3000 1935 8000 8443 433

CMD ["node","index.js"]
