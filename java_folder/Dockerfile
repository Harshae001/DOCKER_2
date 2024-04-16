FROM openjdk:latest

WORKDIR /app
COPY dependencies.json ./
RUN npm install
COPY . .
CMD ["java","multiply.java"]
