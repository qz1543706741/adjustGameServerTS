import { majorCourse } from '@/entity/majorCourse';
import { log } from 'console';
import { Request, Response } from 'express';

import { Connection } from 'typeorm';

export async function getAdjustDetail(req: Request, res: Response, connection: Connection) {
  await new Promise<any>(async (resolve, reject) => {
    for (const element in req.body) {
      await connection
        .getRepository(majorCourse)
        .find({
          select: ['schoolCode', 'schoolName', 'majorCode', 'majorName', 'politicsCourse', 'foreignCourse', 'majorCourse_1', 'majorCourse_2'],
          where: { schoolCode: req.body[element].schoolCode, majorCode: req.body[element].majorCode }
        })
        .then((r: any) => {
          // temp = temp.concat(r);
          req.body[element].temp = r;
        })
        .catch((error: any) => {
          reject(error);
          throw new Error(error);
        });
    }
    resolve(1);
  });
  console.log(req.body);
  const result = req.body.map((item: any) => {
    const tempObj = {
      schoolCode: item.schoolCode,
      schoolName: item.schoolName,
      majorCode: item.majorCode,
      majorName: item.majorName,
      subject_info: [
        { name: 'politicsCourse', list: new Array() },
        { name: 'foreignCourse', list: new Array() },
        { name: 'majorCourse_1', list: new Array() },
        { name: 'majorCourse_2', list: new Array() }
      ]
    };
    item.temp.forEach((element: any) => {
      tempObj.subject_info[0].list.push(element.politicsCourse);
      tempObj.subject_info[1].list.push(element.foreignCourse);
      tempObj.subject_info[2].list.push(element.majorCourse_1);
      tempObj.subject_info[3].list.push(element.majorCourse_2);
    });
    //去重
    tempObj.subject_info.forEach((item) => (item.list = Array.from(new Set(item.list))));
    return tempObj;
  });

  res.json(result);
}
