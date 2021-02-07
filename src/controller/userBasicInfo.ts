import { Request, Response } from 'express';
import { userBasicInfo } from '../entity/userBasicInfo';
import { Connection, getRepository } from 'typeorm';

export async function setUserBasicInfo(req: Request, res: Response, connection: Connection) {
  const temp = {};
  Object.keys(req.body).forEach((key) => {
    if (key.indexOf('info') > -1) {
      Object.assign(temp, {
        [key.replace('info', 'code')]: req.body[key].key,
        [key.replace('info', 'name')]: req.body[key].value
      });
    } else {
      Object.assign(temp, {
        [key]: req.body[key]
      });
    }
  });
  const entity = await connection.getRepository(userBasicInfo).create(temp);
  await connection
    .getRepository(userBasicInfo)
    .save(entity)
    .then((r) => res.json(r))
    .catch((error) => {
      throw new Error(error);
    });
}

export async function getUserBasicInfo(req: Request, res: Response, connection: Connection) {
  await connection
    .getRepository(userBasicInfo)
    .findOne(req.query)
    .then((r) => res.json(r || null))
    .catch((error) => {
      throw new Error(error);
    });
}
