const db = require('../config/db.config');

const User = {
    getAllUsers: async () => {
        const [rows] = await db.query('SELECT * FROM users');
        return rows;
    },

    getUserById: async (userId) => {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
        return rows[0];
    },

    createUser: async (newUser) => {
        const [result] = await db.query('INSERT INTO users SET ?', [newUser]);
        return result.insertId;
    },

    updateUser: async (userId, updatedUser) => {
        await db.query('UPDATE users SET ? WHERE id = ?', [updatedUser, userId]);
    },

    deleteUser: async (userId) => {
        await db.query('DELETE FROM users WHERE id = ?', [userId]);
    },
};

module.exports = User;
