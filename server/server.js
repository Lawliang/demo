const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const PORT = 3000;
const noteController = require('./middleware/noteController');

app.use(express.json());
app.use(cors());

const mongoURI = 'mongodb+srv://Lawliang:AIi6PVByzaznthhv@cluster0.dh7sr4i.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoURI, () => console.log('Connected!'));

app.post('/api', noteController.addNote, (req, res) => {
    res.status(200).json(res.locals.addNote);
})

app.listen(PORT);
