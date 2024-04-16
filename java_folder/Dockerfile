FROM openjdk:latest

WORKDIR /app
COPY dependencies.json ./
RUN mvn install
COPY . .
CMD ["java","multiply.java"]
