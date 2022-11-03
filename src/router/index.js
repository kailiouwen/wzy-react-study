import Home from '../pages/home';
import About, { AboutHisotry, AboutJoin } from '../pages/about';
import Detail from '../pages/detail';
import Detail2 from '../pages/detail2';
import Detail3 from '../pages/detail3';
import Hook from '../pages/hook';


const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/about",
        component: About,
        routes: [
            {
                path: "/about",
                exact: true,
                component: AboutHisotry
            },
            {
                path: "/about/join",
                component: AboutJoin
            }
        ]

    },
    {
        path: "/detail",
        component: Detail,
    },
    {
        path: "/detail2",
        component: Detail2,
    },
    {
        path: "/detail3",
        component: Detail3,
    },
    {
        path: "/hook",
        component: Hook,
    }
]

export default routes;