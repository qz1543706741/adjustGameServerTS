import { Request, Response } from 'express';
import { userGameInfo } from '../entity/userGameInfo';
import { getRepository } from 'typeorm';

export async function setUserGameInfo(req: Request, res: Response) {
    const entity = await getRepository(userGameInfo).create(req.body);
    await getRepository(userGameInfo)
        .save(entity)
        .then((r) => res.json(r))
        .catch((error) => res.json(error));
}

export async function getUserGameInfo(req: Request, res: Response) {
    await getRepository(userGameInfo)
        .findOne(req.query)
        .then((r) => res.json(r || null))
        .catch((error) => res.json(error));
}
