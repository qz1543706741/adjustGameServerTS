import { Request, Response } from 'express';
import { user_gameInfo } from '../src/entity/user_gameInfo';
import { Curd } from '../public/utils/curd';
import { user_info } from '../src/entity/user_info';
const express = require('express');
const router = express.Router();

const curd = new Curd();
interface userInfo {
    openid?: string;
}

/* GET home page. */
/**获取用户的信息
 * @param  {} '/'
 * @param  {Request} req
 * @param  {Response} res
 */
router.get('/setUserInfo', async function (req: Request, res: Response) {
    const userInfo: userInfo = <userInfo>await curd.findEntity<userInfo>(user_info, req.query, true);
    await curd.addEntity(new user_gameInfo(), userInfo.openid);
    //const userScore = await curd.findEntity(user_gameInfo, req.query, true);
    //console.log(userScore);

    //console.log(userScore);
    res.json({ ...userInfo });
});

module.exports = router;
