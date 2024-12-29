import mongoose from "mongoose";
let isConnected = false

export const connectToDB = async () => {


    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log("MongoDB already connected")
        return
    }
    if (!process.env.MONGODB_URI) {
        console.error("MONGODB_URI is not defined in the environment variables.");
        throw new Error("MONGODB_URI is required to connect to the database.");
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            //useNewUrlParser: true,
            //useUnifiedTopology: true
        })
        isConnected = true
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}