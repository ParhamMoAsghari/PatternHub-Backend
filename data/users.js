// users.js
let users = require('./users.json');

function getUserById(id) {
    return users.find(user => user.id === id);
}

function getUserByEmail(email) {
    return users.find(user => user.email === email);
}

function createUser(user) {
    const newUser = {
        id: Date.now().toString(),
        ...user
    };
    users.push(newUser);
    return newUser;
}

module.exports = {
    getUserById,
    getUserByEmail,
    createUser
};
