import { Request, Response } from 'express';
import { userInfo } from '../entity/userInfo';
import { getRepository } from 'typeorm';

export async function setUserInfo(req: Request, res: Response) {
    const entity = await getRepository(userInfo).create(req.body);
    await getRepository(userInfo)
        .save(entity)
        .then((r) => res.json(r))
        .catch((error) => {
            throw new Error(error);
        });
}

export async function getUserInfo(req: Request, res: Response) {
    await getRepository(userInfo)
        .findOne(req.query)
        .then((r) => res.json(r || null))
        .catch((error) => {
            throw new Error(error);
        });
}
