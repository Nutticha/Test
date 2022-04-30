const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const database = require('./db.config');

mongoose.Promise = global.Promise;
mongoose.connect(database.db , {
    useNewUrlParser: true ,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database เชื่อมแล้ว");
})
.catch((e) =>{
    console.error(e.message);
})

const PORT = process.env.PORT || 90
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const userApi = require("./routes/user.routes");
app.use('/api/user' , userApi);


app.get('/', (req, res) => {
    res.send({msg: 'Hello'})
})


const server = app.listen(PORT , () =>{
    console.log("เชื่อมต่อกับพอร์ต" , PORT);
})