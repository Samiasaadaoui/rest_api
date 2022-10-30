const mongoose = require('mongoose')
require('dotenv').config({ path : './config/.env'})

const connectDB=async()=>{

    try {
        await 
        mongoose.connect(process.env.MONGO_URI)
        console.log('database is connected')
    } catch (error) {
        console.log('failed to connect database')
        
    }

}

module.exports =connectDB