import { Request, Response } from 'express';
import { userBasicInfo } from '../entity/userBasicInfo';
import { getRepository } from 'typeorm';

export async function setUserBasicInfo(req: Request, res: Response) {
    console.log(req.body);
    const entity = await getRepository(userBasicInfo).create(req.body);
    console.log(entity);

    // await getRepository(userBasicInfo)
    //     .save(entity)
    //     .then((r) => res.json(r))
    //     .catch((error) => {
    //         throw new Error(error);
    //     });
}

export async function getUserBasicInfo(req: Request, res: Response) {
    await getRepository(userBasicInfo)
        .findOne(req.query)
        .then((r) => res.json(r || null))
        .catch((error) => {
            throw new Error(error);
        });
}
