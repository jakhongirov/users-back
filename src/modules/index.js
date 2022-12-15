const express = require("express")
const router = express.Router()
const Auth = require('../middleware/auth')
const Login = require('./login/login')
const Users = require('./users/users')

router
    .post("/login", Login.LOGIN)
    .get('/users', Users.GET_USERS)
    .post('/register', Users.POST_USER)
    .put('/editUser', Users.PUT_USER)
    .delete('/deleteUser', Users.DELETE_USER);



module.exports = router