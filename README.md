
# Weboin-Task

Student management system , implemented with CREATE, READ, DELETE operations.

task source : [Link](https://weboin-task.vercel.app)

## [Demo](https://weboin-task-client.vercel.app/)

- [Versel](https://vercel.com/) is used for [client-side](https://weboin-task-client.vercel.app/) deployment;
- [Render](https://render.com/) is used for [server-side](https://weboin-task-server.onrender.com) deployment;

## Installation

### 1. Clone the repository

```bash
    git clone https://github.com/M-MUGESHCHARLES/weboin-task.git 
    cd weboin-task
```

### 2. Install dependencies

- backend

```bash
    cd backend
    npm install
```

- frontend

```bash
    cd frontend
    npm install
```

### 3. Run locally

- backend

```bash
    node index.js
```

- frontend

```bash
    npm start
```

continue reading the readme topics for run locally.

- [Environmental Variables](#environmental-variables)
- [Additional Variables](#additional-variables)

## Environment Variables

#### In Backend Folder

To run this project, you will need to add the following environment variables to your `.env file` in backend folder.

`MongoDB_Password` - from your MongoDB Database.

`MongoDB_UserName` - from your MongoDB Database.

## Additional Variables

#### In Frontend Folder

To run this project, you need to add the following variable in the frontend > src > context > Context.js

```javascript
    const Port = `https://weboin-task-server.onrender.com`;
```

replace the above code with below code  

```javascript
    const Port = `http://localhost:4201`;
```

which helps you to get the changes newly made in your backend files reflects it in your frontend app and stores the data in your newely created database.
