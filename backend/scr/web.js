import express from 'express'
import proxy from 'express-http-proxy'
import cors from 'cors'
//import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import bodyParser from 'body-parser'

import { getUserById, getUserByUsername, createUser, updateUser, getProjectById, searchProjects, createProject, deleteProject, getMembershipsForUser, getMembershipsForProject, applyToProject, updateMembershipStatus, getCommentsForProject, createCommentForProject, deleteComment } from './data.js'

// Initialize parameters
const port = process.env.PORT || 3600
const saltRounds = 10;

export function startWebServer() {
  // Create Express app
  const app = express()

  // Add CORS to all routes and methods
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Enable parsing of JSON bodies
  app.use(express.json())

  //////// USERS ROUTES

  app.route('/login').post(async(req, res) =>{
    try {
      const user = await getUserByUsername(req.body.username)
      if (user) {
        const cmp = await bcrypt.compare(req.body.password, user.password);
        if (cmp) {
          //   ..... further code to maintain authentication like jwt or sessions
          res.send({ _id: user._id, username: user.username, fullName: user.fullName, email: user.email, token: "asdf" });
        } else {
          res.status(401).send({ message: "Wrong username or password." });
        }
      } else {
        res.status(401).send({ message: "Wrong username or password." });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server error Occured" });
    }
  })

  app.route('/users').post(async (req, res) => {
    try{
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
      console.log(hashedPassword)
      const user = {...req.body, password: hashedPassword}
      const result = await createUser(user)
      res.status(200).send(result)
    }catch (error) {
      res.status(500)
    }
  })


  //Update Profile information
  app.route('/users/:id').put(async (req, res) => {
    const id = req.params.id
    const doc = req.body
    const result = await updateUser(id, doc)

    if (result.matchedCount == 0) {
      res.status(404).json({})
      return
    }

    res.json({})
  })

  //Get user
  app.route('/users/:id').get(async (req, res) => {
    const id = req.params.id
    const result = await getUserById(id)

    if (!result) {
      res.status(404).json({})
      return
    }

    res.json(result)
  })

  //////// PROJECTS ROUTES

  //Create project
  app.route('/projects').post(async (req, res) => {
    const doc = req.body
    const result = await createProject(doc)
    res.status(201).json({ _id: result.insertedId })
  })


  //Update project
  app.route('/projects/:id').put(async (req, res) => {
    const id = req.params.id
    const doc = req.body
    const result = await updateProject(id, doc)

    if (result.matchedCount == 0) {
      res.status(404).json({})
      return
    }

    res.json({})
  })

  //Delete project
  app.route('/projects/:id').delete(async (req, res) => {
    const id = req.params.id

    await deleteProject(id)

    res.json({})
  })

  //Search Project
  app.route("/projects").get(async (req, res) =>{
    const query = req.query.query
    const projects = await searchProjects(query)
    res.json(projects)
  })

  //Get Project
  app.route('/projects/:id').get(async (req, res) => {
    const id = req.params.id
    const result = await getProjectById(id)

    if (!result) {
      res.status(404).json({})
      return
    }

    res.json(result)
  })

  //////// MEMBERSHIPS ROUTES

  //my memberships
  app.route('/memberships/users/:id').get(async (req, res) => {
    const id = req.params.id
    const membership = await getMembershipsForUser(id)
    res.json(membership)
  })

  //Project Membership
  app.route('/memberships/projects/:id').get(async (req, res) => {
    const id = req.params.id
    const membership = await getMembershipsForProject(id)
    res.json(membership)
  })

  //Project-User Membership
  app.route('/memberships/user-project/:userId/:projectId').get(async (req, res) => {
    const userId = req.params.userId
    const projectId = req.params.projectId
    const membership = await getMembershipsForUserAndProject(userId, projectId)
    res.json(membership)
  })

  //apply for project
  app.route('/memberships/projects/:id').post(async (req, res) => {
    const id = req.params.id
    const userId = req.body.userId
    const result = await applyToProject(id, userId)
    res.status(201).json({ _id: result.insertedId })
  })

  //accept or deny application (we just change the status in the frontend)
  app.route('/memberships/:id').put(async (req, res) => {
    const id = req.params.id
    const status = req.body.status
    const result = await updateMembershipStatus(id, status)

    if (result.matchedCount == 0) {
      res.status(404).json({})
      return
    }

    res.json({})
  })

  ///////// COMMENTS ROUTES

  //create new comment
  app.route('/discussions/:id').post(async (req, res) => {
    const id = req.params.id
    const doc = req.body
    const result = await createCommentForProject(id, doc)
    res.status(201).json({ _id: result.insertedId })
  })

  //Read all comments
  app.route('/discussions/:id').get(async (req, res) => {
    const id = req.params.id
    const comment = await getCommentsForProject(id)
    res.json(comment)
  })

  //Delete comment
  app.route('/projects/:id').delete(async (req, res) => {
    const id = req.params.id
    await deleteComment(id)
    res.json({})
  })

  //////// LISTEN

  // Reverse proxy or static file server for frontend
  const env = process.env.NODE_ENV || 'development';
  if (env == 'production') {
    app.use('/', express.static('public'));
  } else {
    app.use('/', proxy('localhost:3000'));
  }

  // Start server and listen for requests
  app.listen(port, function() {
    console.log('Listening on ' + port + '.')
  })
}
