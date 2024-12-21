const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

//middleware to parse json
app.use(express.json());

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/mydatabase', {
	useNewUrlParser: true, 
	useUnifiedTopology: true
});

app.use((req, res, next, ) => {
	console.log(`received ${req.method} request on ${req.originalUrl}`);
	console.log('request headers:', req.headers);
	console.log('request body:', req.body);
	next();
});
	// 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connections error'));
db.once('open', function() {
	console.log('conenction successful');
});

// use user routes for requests to /users
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

// This is basic route for homepage
app.get('/', (req, res) => {
	res.send('Hello World');
});

// This is the server listening 
app.listen(port, () => { 
	console.log('app listening at localhost:3000');
});

