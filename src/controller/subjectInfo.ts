import { Request, Response } from 'express';
import { subjuctList } from '../entity/subjectInfo';
import { Connection, getRepository } from 'typeorm';

export async function getSubjectInfo(req: Request, res: Response, connection: Connection) {
  console.log(req.query);

  await connection
    .getRepository(subjuctList)
    .findOne({
      where: req.query
    })
    .then((r) => res.json(r || null))
    .catch((error) => {
      throw new Error(error);
    });
}
