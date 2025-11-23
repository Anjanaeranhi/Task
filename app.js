const express = require('express')
const DemoRouter = require('./Route/demo.Routes')
const { connect_DB } = require('./Config/db.config')
const app = express()
const env = require('dotenv')
env.config()
app.use(express.json())
connect_DB();
const cors = require('cors')
app.use(cors())

app.use("/", DemoRouter);

app.listen(8080, (err)=>{
    if(err){
        console.log("There is an error", err);
        process.exit(1)
    }
    console.log("Running in port 8080...........................")
})