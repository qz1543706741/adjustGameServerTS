import { majorCourse } from '@/entity/majorCourse';
import { Request, Response } from 'express';

import { Connection } from 'typeorm';

export async function getAdjustDetail(req: Request, res: Response, connection: Connection) {
  let temp: any = [];
  await new Promise<any>(async (resolve, reject) => {
    for (const element in req.body) {
      await connection
        .getRepository(majorCourse)
        .find({
          select: ['schoolCode', 'schoolName', 'majorCode', 'majorName', 'politicsCourse', 'foreignCourse', 'majorCourse_1', 'majorCourse_2'],
          where: { schoolCode: req.body[element].schoolCode, majorCode: req.body[element].majorCode }
        })
        .then((r: any) => {
          temp = temp.concat(r);
        })
        .catch((error: any) => {
          reject(error);
          throw new Error(error);
        });
    }
    resolve(1);
  });
  const result = req.body.map((item: any) => {
    const tempObj = {
      schoolCode: item.schoolCode,
      schoolName: item.schoolName,
      majorCode: item.majorCode,
      majorName: item.majorName,
      politicsCours: new Array(),
      foreignCourse: new Array(),
      majorCourse_1: new Array(),
      majorCourse_2: new Array()
    };
    temp.forEach((element: any) => {
      tempObj.politicsCours.push(element.politicsCourse);
      tempObj.foreignCourse.push(element.foreignCourse);
      tempObj.majorCourse_1.push(element.majorCourse_1);
      tempObj.majorCourse_2.push(element.majorCourse_2);
    });
    tempObj.politicsCours = Array.from(new Set(tempObj.politicsCours));
    tempObj.foreignCourse = Array.from(new Set(tempObj.foreignCourse));
    tempObj.majorCourse_1 = Array.from(new Set(tempObj.majorCourse_1));
    tempObj.majorCourse_2 = Array.from(new Set(tempObj.majorCourse_2));
    return tempObj;
  });

  res.json(result);
}
