import { getUserInfo, setUserInfo } from '../controller/userInfo';
import { getUserGameInfo, setUserGameInfo } from '../controller/userGameInfo';
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
    }
];