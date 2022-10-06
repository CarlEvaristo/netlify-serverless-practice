import { MongoClient } from "mongodb"

const mongoClient = new MongoClient(process.env.REACT_APP_MONGODB_URI);
const connection = mongoClient.connect();

export const handler = async (event) => {
    try {
        const database = (await connection).db(process.env.REACT_APP_MONGODB_DATABASE);
        const collection = database.collection(process.env.REACT_APP_MONGODB_COLLECTION);
        const results = await collection.find({}).limit(50).toArray();
        // const results = await collection.insertOne( { item: "card", qty: 15 } );
        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}
