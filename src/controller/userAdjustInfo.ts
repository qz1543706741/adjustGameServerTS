import { Request, Response } from 'express';
import { userAdjustInfo } from '../entity/userAdjustInfo';
import { getRepository } from 'typeorm';

export async function setUserAdjustInfo(req: Request, res: Response) {
    const entity = await getRepository(userAdjustInfo).create(req.body);
    await getRepository(userAdjustInfo)
        .save(entity)
        .then((r) => res.json(r))
        .catch((error) => {
            throw new Error(error);
        });
}

export async function getUserAdjustInfo(req: Request, res: Response) {
    await getRepository(userAdjustInfo)
        .findOne(req.query)
        .then((r) => res.json(r || null))
        .catch((error) => {
            throw new Error(error);
        });
}
