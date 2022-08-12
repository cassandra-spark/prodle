# Prodle
Get those credits, get that degree

![image](screenshots/Prodle_Logo_Casandra_Sparks.png)

## Description

Finding a suitable project for our Bachelor’s /Master’s project and thesis has been a cumbersome process in the past.
With prodles, you are able to find the right project with just a few click. But that's only half of the problems.
Sometimes, we need to find  group members with similar way of working that also needs to do a project which has been hard to find due to pandemics, lack of time to socialize, etc.
Prodles help to connect you with other people who are interested in the same project so you can start your project in no time!

## Features

### Projects
- Add a new project
- Search for a project
- Join/apply to a project
- Delete a project
- Accept/decline a join request

### Discussions
- Create a thread
- Reply to a thread
- Delete a thread

### Users
- Create user profile
- See other user’s profile
- Connecting user with each others
- See user’s past works/projects


## Project Architecture

![Publication1](https://user-images.githubusercontent.com/56160802/158600383-05f26db1-bf20-44c7-a76b-2e18e429d41f.jpg)

## Libraries / Algorithms Used

### Back end
                
| Technology | Function |
| ------ | ------ |
| MongoDB Atlas | Files are hosted in MongoDB Atlas database |
| NodeJS | Asynchronous JavaScript runtime environment |
| Express |  Connection with the front end is done through API developed in Express|

### Front end

| Technology | Function |
| ------ | ------ |
| React | Used to make a single page application |
| Tailwind CSS | CSS framework to design the user interface |

## Video Demonstration

![Smatch Demo]


## How to run the project

You need to have Node.js installed

### Running the Database

Step 1: Open your terminal or command prompt
Step 2: Change to the ‘/backend’
Step 3: Type ‘npm install’
Step 4: Type ‘npm run-script dev’

```
cd backend
npm install
npm run-script dev
```

Output:		
```
Listening on 3600.
Connected to database
```

### Running the Frontend

Step 1: Open your terminal or command prompt
Step 2: Change to the ‘/frontend’
Step 3: Type ‘npm install’
Step 4: Type ‘npm start’
Step 5: Open your browser and go to http://localhost:3600/

```
cd frontend
npm install
npm start
```

## Building

### Building the Frontend

Step 1: Go to the frontend directory
Step 2: Build the frontend
Step 3: Copy all files from “frontend/dist/my-angular-app” into “backend/public”

```
cd frontend
npm run-script build
```

### Building the Backend

Step 1: Go to the backend directory
Step 2: Build the backend


```
cd ../backend
npm run-script build
```

## Deployment

Step 1: Create a new app in Heroku
Step 2: Open a terminal and go to the directory of our project
Step 3: Create a new Git repository in the folder 
Step 4: Add our Heroku project as a git remote

```
git init
heroku git:remote -a <app-name>

```

Step 5: Push the new repository into Heroku
Step 6: Open  https://<app-name>.herokuapp.com

```
git add . 
git commit -am “Add code”
git push heroku master

```


## Group Members
- Jean Qussa
- Nurmalita Manggali
- Nave Wibowo
