import { Request, Response } from 'express';
import { userGameInfo } from '../entity/userGameInfo';
import { Connection, getRepository } from 'typeorm';

export async function setUserGameInfo(req: Request, res: Response, connection: Connection) {
  const entity = await connection.getRepository(userGameInfo).create(req.body);
  await getRepository(userGameInfo)
    .save(entity)
    .then((r) => res.json(r))
    .catch((error) => {
      throw new Error(error);
    });
}

export async function getUserGameInfo(req: Request, res: Response, connection: Connection) {
  await connection
    .getRepository(userGameInfo)
    .findOne(req.query)
    .then((r) => res.json(r || null))
    .catch((error) => {
      throw new Error(error);
    });
}
