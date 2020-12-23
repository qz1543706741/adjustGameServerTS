import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { user_score } from '../src/entity/user_score';
import { Curd } from '../public/utils/curd';
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req: Request, res: Response): any {
    createConnection()
        .then(async (connection) => {
            const curd = new Curd(connection);
            console.log('Inserting a new user into the database...');
            const users = await curd.find(user_score);
            res.json(users);
            connection.close();
        })
        .catch((error) => console.log(error));
});

module.exports = router;
