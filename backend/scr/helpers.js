import { ObjectId } from 'mongodb'

export function toObjectId(id) {
	try {
		return ObjectId(id)
	} catch (e) {
		return null
	}
}
