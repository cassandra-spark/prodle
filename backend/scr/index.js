const express = require('express')
const proxy = require('express-http-proxy');
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId


// Create Express app
const app = express()

// Add CORS to all routes and methods
app.use(cors())

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

//Login


//Sign-up
app.route('/user').post(async (req, res) => {
    const doc = req.body
    const result = await db.collection(userCollection).insertOne(doc)
    res.status(201).json({ _id: result.insertedId })
  })


//Update Profile information
app.route('/user/:id').put(async (req, res) => {
    const id = req.params.id
    const doc = req.body
    const result = await db.collection(userCollection).updateOne({ _id: id }, { $set: doc })
  
    if (result.matchedCount == 0) {
      res.status(404).json({})
      return
    }
  
    res.json({})
  })


//Save project


//Get user
app.route('/user/:id').get(async (req, res) => {
    const id = req.params.id
    const result = await db.collection(userCollection).findOne(id)
  
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
    const result = await db.collection(projectCollection).updateOne({ _id: id }, { $set: doc })
  
    if (result.matchedCount == 0) {
      res.status(404).json({})
      return
    }
  
    res.json({})
  })

//Delete project
app.route('/projectlist/:id').delete(async (req, res) => {
    const id = req.params.id
    
    await db.collection(projectCollection).deleteOne({ _id: id })

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
    const result = await db.collection(projectCollection).findOne(id)
  
    if (!result) {
      res.status(404).json({})
      return
    }
  
    res.json(result)
  })

//Search Project


//my memberships


//Project Membership


//apply for project


//accept application


//deny application


//create new comment


//Read all comments


//Update comment


//Delete comment



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