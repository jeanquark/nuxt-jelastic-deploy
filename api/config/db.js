const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        // autoIndex: false // To be disabled in production
    })

    console.log(`MongoDB connected: ${conn.connection.host}`)
}

module.exports = connectDB
