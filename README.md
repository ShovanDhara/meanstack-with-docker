# Meanstack Application with Docker Containerization

C&W IPL Application is a Meanstack App for IPL all season's matches and team status with detail report. The application contains simple login form with JWT authentication.

## Instructions

Install Docker in your system and run within the root path

```bash
docker-compose up --build
```

Open the application 

```bash
localhost:4200 - if not using Docker Toolkit
192.168.99.100:4200 - if using Docker Toolkit

To run only mongodb server - "docker run -d --name mongodb -p 27017:27017 mongo"
```
*Note: For angular in package.json change 'ng serve' to 'ng serve --host 0.0.0.0'*

*please check IP as per your system by using - docker-machine ip default* 


