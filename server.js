const express = require('express');
const cors = require('cors');

const router = require('./router/router');
const mongoose = require('mongoose');
require('dotenv').config();

//const { databaseConnect } = require('./database/databaseConnect');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/', (req, res)=>{
    res.status(200).json({messge: 'Server connected'})
});

app.use('/api', router);

// Connect to Database
//databaseConnect();

const dbURL = process.env.DATABASE_URL;


const databaseConnect = async ()=>{
    try {

        const connect = await mongoose.connect( dbURL , {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true
        });

        console.log(`DB Connected. ${connect.connection.name}`);

    } catch (error) {
        console.log(`Error in connecting to DataBase: ${error.message}`)
    }
}

databaseConnect()


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server Connected to PORT: ${PORT}`);
});