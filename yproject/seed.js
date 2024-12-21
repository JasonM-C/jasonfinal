const mongoose = require('mongoose'); 
const User = require('./userModel.js');

 // Adjust path as necessary // Database connection 
mongoose.connect('mongodb://localhost:3000/mydatabase', { 
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}, err => {
	if (err) throw err;
	console.log('connected to db successfully');
}); 

const db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function () { 
	console.log('Connected successfully for seeding'); 
});
// Seed data array 
const users = [ 
	{ name: 'Alice', age: 25, email: 'alice@example.com' }, 
	{ name: 'Bob', age: 30, email: 'bob@example.com' }, 
	{ name: 'Carol', age: 35, email: 'carol@example.com' } 
];

 // Function to insert seed data 
async function seedDB() {
try { 
	await User.deleteMany({}); // Clears the existing users 
	await User.insertMany(users); 
	console.log('Data seeded successfully'); 
} catch (error) { 
	console.error('Error seeding data:', error);
} finally {
	db.close();
	} 
} 

seedDB();