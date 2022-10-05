import { MongoClient } from "mongodb"

const mongoClient = new MongoClient(process.env.REACT_APP_MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const database = (await clientPromise).db(process.env.REACT_APP_MONGODB_DATABASE);
        const collection = database.collection(process.env.REACT_APP_MONGODB_COLLECTION);
        // Function logic here ...
        const results = await collection.find({}).limit(10).toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }
    } catch (error) {
        return { 
            statusCode: 500, 
            body: error.toString() 
        }
    }
}

module.exports = { handler }
