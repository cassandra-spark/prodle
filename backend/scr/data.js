import { MongoClient } from 'mongodb'

import { toObjectId } from './helpers.js'

const dbName = 'final-project'
const dbUrl = "mongodb+srv://admin:admin@projects-0.vvpu5.mongodb.net/?retryWrites=true&w=majority"
const userCollection= 'user'
const discussionCollection= 'discussion'
const membershipCollection= 'membership'
const projectCollection= 'project'

let db

export function getUserById(userId) {
	userId = toObjectId(userId)
	if (!userId) return null
	return db.collection(userCollection).findOne(userId)
}

export function getUserByUsername(username) {
	return db.collection(userCollection).findOne({ username })
}

export function createUser(user) {
	return db.collection(userCollection).insertOne(user)
}

export function updateUser(userId, user) {
	return db.collection(userCollection).updateOne({ _id: toObjectId(userId) }, { $set: user })
}

export function getProjectById(projectId) {
	projectId = toObjectId(projectId)
	if (!projectId) return null
	return db.collection(projectCollection).findOne(projectId)
}

export function listProjects() {
	return db.collection(projectCollection).find({}).toArray()
}

export function searchProjects(query) {
	if (!query) {
		return listProjects()
	}
	return db.collection(projectCollection).find({ $or: [ {"title":{$regex: query, $options:"i"}}, {"description":{$regex: query, $options:"i"}}, {"skills":{$regex: query, $options:"i"}} ]}).toArray()
}

export async function createProject(project) {
	const doc = {...project, owner: toObjectId(project.owner)}
	const result = await db.collection(projectCollection).insertOne(doc)
	const projectId = result.insertedId
	addUserToProject(projectId.toString(), project.owner)
	return result
}

export function updateProject(projectId, project) {
	return db.collection(projectCollection).updateOne({ _id: toObjectId(projectId) }, { $set: project })
}

export function deleteProject(projectId) {
	return db.collection(projectCollection).deleteOne({ _id: toObjectId(projectId) })
}

export function getMembershipsForUser(userId) {
	return db.collection(membershipCollection).find({"user": toObjectId(userId)}).toArray()
}

export function getMembershipsForProject(projectId) {
	return db.collection(membershipCollection).find({"project": toObjectId(projectId)}).toArray()
}

export function getMembershipsForUserAndProject(userId, projectId) {
	return db.collection(membershipCollection).find({"user": toObjectId(userId), project: toObjectId(projectId)}).toArray()
}

export function getCommentsForProject(projectId) {
	projectId = toObjectId(projectId)
	if (!projectId) return []
	return db.collection(discussionCollection).find({"project": projectId}).toArray()
}

export function addUserToProject(projectId, userId) {
	const membership = {
		project: toObjectId(projectId),
		user: toObjectId(userId),
		status: "accepted"
	}
	return db.collection(membershipCollection).insertOne(membership)
}

export function applyToProject(projectId, userId) {
	const membership = {
		project: toObjectId(projectId),
		user: toObjectId(userId),
		status: "pending"
	}
	return db.collection(membershipCollection).insertOne(membership)
}

export function updateMembershipStatus(membershipId, status) {
	return db.collection(membershipCollection).updateOne({ _id: toObjectId(membershipId) }, { $set: { status } })
}

export function createCommentForProject(projectId, comment) {
	comment.project = toObjectId(projectId)
	if (comment.owner) {
		comment.owner = toObjectId(comment.owner)
	}
	if (comment.parent) {
		comment.parent = toObjectId(comment.parent)
	}
	return db.collection(discussionCollection).insertOne(comment)
}

export function deleteComment(commentId) {
	return db.collection(discussionCollection).deleteOne({ _id: toObjectId(commentId) })
}

export function connectToDatabase() {
	MongoClient.connect(dbUrl, (err, client) => {
		if (err) {
			console.error(err)
			return
		}

		db = client.db(dbName)

		console.log("Connected to database")
	})
}
