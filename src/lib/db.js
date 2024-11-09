const mongoose = require('mongoose')


const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        // If the connection is already established, use the existing connection
        return mongoose.connection.asPromise();
    }
    
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Keeps Mongoose from waiting indefinitely
            socketTimeoutMS: 45000, // Closes sockets after 45 seconds of inactivity
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;