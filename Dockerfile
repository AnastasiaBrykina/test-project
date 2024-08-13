#для prod даю имя как build
FROM node as build

#Устанавливаю рабочую директорию
WORKDIR /app

#Копирую package*.json в app
COPY package*.json ./

#копирую все зависимости (все файлы в текущую папку app + node-modules)
COPY . .

#Устанавливаю зависимости
RUN npm install

#Получаю папку сборки в проекте
RUN npm run build

#Устанавливаю nginx образ
FROM nginx

#Копирую из папки сборки в nginx папку
COPY --from=build /app/dist /usr/share/nginx/html

#Добавить конфиг
COPY default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

#Дефолтный порт для nginx
EXPOSE 80

CMD [ "nginx","-g","daemon off;" ]