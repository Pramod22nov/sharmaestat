import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Successfully connect")
    }).catch((err) => {
        console.log(err)
    });

const app = express();

app.listen(3000 , () => {
    console.log("App listen in 3000 port????");
})