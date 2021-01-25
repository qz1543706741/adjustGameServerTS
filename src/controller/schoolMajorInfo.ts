import { Request, Response } from 'express';
import { schoolMajorInfo } from '../entity/schoolMajorInfo';
import { getRepository } from 'typeorm';

// export async function setUserAdjustInfo(req: Request, res: Response) {
//     const entity = await getRepository(userAdjustInfo).create(req.body);
//     await getRepository(userAdjustInfo)
//         .save(entity)
//         .then((r) => res.json(r))
//         .catch((error) => {
//             throw new Error(error);
//         });
// }

export async function getSchoolMajorInfo(req: Request, res: Response) {
    await getRepository(schoolMajorInfo)
        // .find({ where: req.query })
        .query(`SELECT distinct major_code,major_name FROM adjust_game.school_major where school_code=${req.query.schoolCode}`)
        .then((r) => {
            res.json(r || null);
        })
        .catch((error) => {
            throw new Error(error);
        });
}
