const express = require('express')
const proxy = require('express-http-proxy');
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


// Create Express app
const app = express()
const saltRounds = 10;

// Add CORS to all routes and methods
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable parsing of JSON bodies
app.use(express.json())

// Initialize parameters
const port = process.env.PORT || 3600
const dbName = 'final-project'
const dbUrl = "mongodb+srv://admin:admin@projects-0.vvpu5.mongodb.net/?retryWrites=true&w=majority"

const userCollection= 'user'
const discussionCollection= 'discussion'
const membershipCollection= 'membership'
const projectCollection= 'project'

// Create database object
let db

//TO-DO:Login also not idea what to do
app.route('/login').post(async(req, res) =>{
  try {
    const user = await db.collection(userCollection).findOne({ username: req.body.username })
    console.log(user);
    if (user) {
      const cmp = await bcrypt.compare(req.body.password, user.password);
      if (cmp) {
        //   ..... further code to maintain authentication like jwt or sessions
        res.send("Auth Successful");
      } else {
        res.send("Wrong username or password.");
      }
    } else {
      res.send("Wrong username or password.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
})


//TO_DO: Sign up lol idk whats up
app.route('/user').post(async (req, res) => {
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
    console.log(hashedPassword)
    const user = {...req.body, password: hashedPassword}
    const result = await db.collection(userCollection).insertOne(user)
    res.status(200).send(result)
  }catch (error) {
    res.status(500)
  }
  })


//Update Profile information
app.route('/user/:id').put(async (req, res) => {
    const id = req.params.id
    const doc = req.body
    const result = await db.collection(userCollection).updateOne({ _id: ObjectId(id) }, { $set: doc })
  
    if (result.matchedCount == 0) {
      res.status(404).json({})
      return
    }
  
    res.json({})
  })


//Save project (Should we just do this one in the front end then update the profile information?)


//Get user
app.route('/user/:id').get(async (req, res) => {
    const id = req.params.id
    const result = await db.collection(userCollection).findOne(ObjectId(id))
  
    if (!result) {
      res.status(404).json({})
      return
    }
  
    res.json(result)
  })

//Create project
app.route('/projectlist').post(async (req, res) => {
    const doc = req.body
    const result = await db.collection(projectCollection).insertOne(doc)
    res.status(201).json({ _id: result.insertedId })
  })


//Update project
app.route('/projectlist/:id').put(async (req, res) => {
    const id = req.params.id
    const doc = req.body
    const result = await db.collection(projectCollection).updateOne({ _id: ObjectId(id) }, { $set: doc })
  
    if (result.matchedCount == 0) {
      res.status(404).json({})
      return
    }
  
    res.json({})
  })

//Delete project
app.route('/projectlist/:id').delete(async (req, res) => {
    const id = req.params.id
    
    await db.collection(projectCollection).deleteOne({ _id: ObjectId(id) })

    res.json({})
  })


//Get all projects
app.route('/projectlist').get(async (req, res) => {
    let projects = []
    projects = await db.collection(projectCollection).find({}).toArray()
    res.json(projects)
  })


//Get Project
app.route('/projectlist/:id').get(async (req, res) => {
    const id = req.params.id
    const result = await db.collection(projectCollection).findOne(ObjectId(id))
  
    if (!result) {
      res.status(404).json({})
      return
    }
  
    res.json(result)
  })

//Search Project


//my memberships
app.route('/user_membership/:user_id').get(async (req, res) => {
  const user_id = req.params.user_id
  let membership = []
 membership = await db.collection(membershipCollection).find({"user": ObjectId(user_id), "status": "accepted"}).toArray()
  res.json(membership)
})

//Project Membership
app.route('/user_project/:project_id').get(async (req, res) => {
  const project_id = req.params.project_id
  let membership = []
 membership = await db.collection(membershipCollection).find({"user": ObjectId(project_id)}).toArray()
  res.json(membership)
})

//apply for project
app.route('/membership').post(async (req, res) => {
  const doc = req.body
  const result = await db.collection(membershipCollection).insertOne(doc)
  res.status(201).json({ _id: result.insertedId })
})

//accept or deny application (we just change the status in the frontend)
app.route('/membership/:id').put(async (req, res) => {
  const id = req.params.id
  const doc = req.body
  const result = await db.collection(membershipCollection).updateOne({ _id: ObjectId(id) }, { $set: doc })

  if (result.matchedCount == 0) {
    res.status(404).json({})
    return
  }

  res.json({})
})



//create new comment
app.route('/discussions').post(async (req, res) => {
  const doc = req.body
  const result = await db.collection(discussionCollection).insertOne(doc)
  res.status(201).json({ _id: result.insertedId })
})
//Read all comments
app.route('/discussions/:project_id').get(async (req, res) => {
  const project_id = req.params.project_id
  let comment = []
  comment = await db.collection(discussionCollection).find({"project": ObjectId(project_id)}).toArray()
  res.json(comment)
})

//Update comment
app.route('/discussions/:id').put(async (req, res) => {
  const id = req.params.id
  const doc = req.body
  const result = await db.collection(discussionCollection).updateOne({ _id: ObjectId(id) }, { $set: doc })

  if (result.matchedCount == 0) {
    res.status(404).json({})
    return
  }

  res.json({})
})

//Delete comment
app.route('/projectlist/:id').delete(async (req, res) => {
  const id = req.params.id
  
  await db.collection(discussionCollection).deleteOne({ _id: ObjectId(id) })

  res.json({})
})


// Reverse proxy or static file server for frontend
const env = process.env.NODE_ENV || 'development';
if (env == 'production') {
  app.use('/', express.static('public'));
} else {
  app.use('/', proxy('localhost:4200'));
}

// Start server and listen for requests
app.listen(port, function() {
    console.log('Listening on ' + port + '.')
  })
  
  // Connect to database
  MongoClient.connect(dbUrl, (err, client) => {
    if (err) {
      console.error(err)
      return
    }
  
    db = client.db(dbName)
  
    console.log("Connected to database")
  })