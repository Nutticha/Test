const express = require('express');
const userModel = require('../models/users');
const userRoute = express.Router();

//เอาไว้ดึงข้อมูล
userRoute.route('/').get((req, res, next) => {
    userModel.find((error , data) => {
        if(error) return next(error);
        else res.json(data);
    });
});

module.exports = userRoute;
