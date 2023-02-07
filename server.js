const bodyParser = require('body-parser');
const express = require ('express');
const mongoose = require('mongoose');

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app midleware
app.use(bodyParser.json());

app.use(postRoutes);

const PORT = 8000;
const DB_URL = "mongodb+srv://twg:twg123@cluster0.vgu0pfo.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URL)

.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});