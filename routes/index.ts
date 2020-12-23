const express = require('express');
const router = express.Router();
import { Request, Response } from 'express';
/* GET home page. */
router.get('/', function (req: Request, res: Response): any {
    // res.render('index', { title: 'Express' });
    //console.log(res);
    console.log(133);
    res.json({ a: 'zhangsan' });
});

module.exports = router;
