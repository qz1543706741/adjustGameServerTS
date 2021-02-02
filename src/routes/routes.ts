require('module-alias/register');
import { getUserInfo, setUserInfo } from '@/controller/userInfo';
import { getUserGameInfo, setUserGameInfo } from '@/controller/userGameInfo';
import { getUserBasicInfo, setUserBasicInfo } from '@/controller/userBasicInfo';
import { getUserAdjustInfo, setUserAdjustInfo } from '@/controller/userAdjustInfo';
import { getSchoolMajorInfo } from '@/controller/schoolMajorInfo';
import { getSubjectInfo } from '@/controller/subjectInfo';
import { getAdjustDetail } from '@/controller/userAdjustDetail';

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: '/getUserInfo',
    method: 'get',
    action: getUserInfo
  },
  {
    path: '/setUserInfo',
    method: 'post',
    action: setUserInfo
  },
  {
    path: '/getUserGameInfo',
    method: 'get',
    action: getUserGameInfo
  },
  {
    path: '/setUserGameInfo',
    method: 'post',
    action: setUserGameInfo
  },
  {
    path: '/getUserBasicInfo',
    method: 'get',
    action: getUserBasicInfo
  },
  {
    path: '/setUserBasicInfo',
    method: 'post',
    action: setUserBasicInfo
  },
  {
    path: '/getUserAdjustInfo',
    method: 'get',
    action: getUserAdjustInfo
  },
  {
    path: '/setUserAdjustInfo',
    method: 'post',
    action: setUserAdjustInfo
  },
  {
    path: '/getSchoolMajorInfo',
    method: 'get',
    action: getSchoolMajorInfo
  },
  {
    path: '/getSubjectInfo',
    method: 'get',
    action: getSubjectInfo
  },
  {
    path: '/getAdjustDetail',
    method: 'post',
    action: getAdjustDetail
  }
];
