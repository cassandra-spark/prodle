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


//Delete project


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


//apply for project


//accept application


//deny application


//create new comment


//Read all comments


//Update comment


//Delete comment


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