import { Request, Response } from 'express';
import { userAdjustInfo } from '@/entity/userAdjustInfo';
import { Connection, getRepository } from 'typeorm';
import { userSubjectScore } from '@/entity/userSubjectScore';
import _ from 'lodash';
export async function setUserAdjustInfo(req: Request, res: Response, connection: Connection) {
  const { openid, variable_form_single } = req.body;
  if (variable_form_single instanceof Array) {
    const temp = { openid };
    let subjectInfo = new Array();
    variable_form_single.forEach((item) => {
      if (!item.subject_info)
        Object.assign(temp, {
          ['adjust_school_code_0' + item.group_index]: item.schoolCode,
          ['adjust_school_name_0' + item.group_index]: item.schoolName,
          ['adjust_major_code_0' + item.group_index]: item.majorCode,
          ['adjust_major_name_0' + item.group_index]: item.majorName
        });
      else {
        let temp = { openid };
        Object.assign(temp, {
          group_index: item.group_index,
          foreignCourseName: item.subject_info.foreignCourse.subject_name,
          foreignCourseScore: item.subject_info.foreignCourse.subject_core,
          politicsCourseName: item.subject_info.politicsCourse.subject_name,
          politicsCourseScore: item.subject_info.politicsCourse.subject_core,
          majorCourse_1_Name: item.subject_info.majorCourse_1.subject_name,
          majorCourse_1_Score: item.subject_info.majorCourse_1.subject_core,
          majorCourse_2_Name: item.subject_info.majorCourse_2.subject_name,
          majorCourse_2_Score: item.subject_info.majorCourse_2.subject_core
        });
        subjectInfo.push(temp);
      }
    });
    if (subjectInfo.length === 0) {
      const entity = await connection.getRepository(userAdjustInfo).create(temp);
      await getRepository(userAdjustInfo)
        .save(entity)
        .then((r) => res.json(r))
        .catch((error) => {
          throw new Error(error);
        });
    } else {
      await new Promise<any>(async (resolve, reject) => {
        for (const key in subjectInfo) {
          let temp: any = undefined;
          await getRepository(userSubjectScore)
            .findOne({ group_index: subjectInfo[key].group_index, openid: subjectInfo[key].openid })
            .then((r) => {
              temp = r;
            });
          if (temp) {
            await getRepository(userSubjectScore).update(temp, _.omit(subjectInfo[key], ['openid', 'group_index']));
          } else {
            const entity = await connection.getRepository(userSubjectScore).create(subjectInfo[key]);
            await getRepository(userSubjectScore)
              .save(entity)
              .catch((err) => reject(err));
          }
        }
        resolve(1);
      })
        .then(() => {
          res.json(subjectInfo);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
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
