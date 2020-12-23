import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { user_score } from '../src/entity/user_score';
import { Curd } from '../public/utils/curd';
const express = require('express');
const router = express.Router();
const curd = new Curd();

/* GET home page. */
router.get('/', async function (req: Request, res: Response) {
    console.log('Inserting a new user into the database...');
    const users = await curd.find(user_score);
    res.json(users);
    curd.close();
});

module.exports = router;
