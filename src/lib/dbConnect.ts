import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log('Already connected to database');
        return

    }

    try {
        await mongoose.connect(process.env.MOGODB_URI)
        connection.isConnected = db.connection[0].readyState

        console.log("DB connected Successfully");
    } catch (error) {
        console.log("Database connection failed", error)
        ProcessingInstruction.exit(1)

    }
}

export default dbConnect;