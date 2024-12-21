const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
  
// adjust path as necessary // Define routes here, e.g., GET, POST 
router.get('/', async (req, res) => { 
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}); 
// retrieving record by name
router.get('/byname/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const users = await User.find({ name: new RegExp(name, 'i') });
        if (users.length === 0) {
            return res.status(404).json({ message: 'no users found with that name' });
            }
            res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// creating a new user
router.post('/', async (req, res) => {   
    const user = new User({
        name: req.body.name, 
        age: req.body.age,
        email: req.body.email
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//deleting a user
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'user not found' });
        res.json({ message: 'deleted user' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Put to update a user
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'user not found' });
        res.json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;