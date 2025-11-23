const { connect } = require("mongoose")
const env = require('dotenv')

env.config()

const connect_DB = async () =>{
    try {
        const{connection} = await connect(process.env.MONGO_URL, {
            dbName: "DemoProject"
        })
        console.log("connected to", connection.db.databaseName)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connect_DB}