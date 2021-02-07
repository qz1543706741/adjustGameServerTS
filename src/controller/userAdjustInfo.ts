import { Request, Response } from 'express';
import { userAdjustInfo } from '../entity/userAdjustInfo';
import { Connection, getRepository } from 'typeorm';

export async function setUserAdjustInfo(req: Request, res: Response, connection: Connection) {
  const { openid, variable_form_single } = req.body;
  if (variable_form_single instanceof Array) {
    const temp = { openid };
    variable_form_single.forEach((item) => {
      Object.assign(temp, {
        ['adjust_school_code_0' + item.group_index]: item.schoolCode,
        ['adjust_school_name_0' + item.group_index]: item.schoolName,
        ['adjust_major_code_0' + item.group_index]: item.majorCode,
        ['adjust_major_name_0' + item.group_index]: item.majorName
      });
    });
    console.log(temp);
    const entity = await connection.getRepository(userAdjustInfo).create(temp);
    await getRepository(userAdjustInfo)
      .save(entity)
      .then((r) => res.json(r))
      .catch((error) => {
        throw new Error(error);
      });
  } else throw new Error('variable_form_single is not a Array');
}

export async function getUserAdjustInfo(req: Request, res: Response, connection: Connection) {
  await connection
    .getRepository(userAdjustInfo)
    .findOne(req.query)
    .then((r) => res.json(r || null))
    .catch((error) => {
      throw new Error(error);
    });
}
