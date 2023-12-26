const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.getUserById(userId);
        if (!user) {
            res.status(404).json({ error: 'User not found.' });
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createUser = async (req, res) => {
    const newUser = req.body;
    try {
        const userId = await User.createUser(newUser);
        res.status(201).json({ id: userId, message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    try {
        await User.updateUser(userId, updatedUser);
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        await User.deleteUser(userId);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
