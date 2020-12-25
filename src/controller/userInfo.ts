import { Request, Response, json } from 'express';
import { userInfo } from '../entity/userInfo';
import { getRepository } from 'typeorm';

const debuglog = require('util').debuglog('debug');

export async function setUserInfo(req: Request, res: Response) {
    debuglog(req.body);
    const entity = await getRepository(userInfo).create(req.body);
    await getRepository(userInfo)
        .save(entity)
        .then((r) => res.json(r))
        .catch((error) => res.json(error));
}

export async function getUserInfo(req: Request, res: Response) {
    debuglog(req.query);
    await getRepository(userInfo)
        .findOne(req.query)
        .then((r) => res.json(r || null))
        .catch((error) => res.json(error));
}
