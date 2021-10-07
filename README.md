## Getting Started with Docker

I. For using this app in your browser, is important to install Docker in your machine.
After that, access the root directory project and execute this command:
```
docker build -t client . && docker run --name CLIENT_CONTAINER -p 0.0.0.0:5000:3000 client
```

II. Click in this link: http://localhost:5000