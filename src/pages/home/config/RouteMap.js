import Loadable from 'react-loadable';
import ReactLoading from 'react-loading';

const Statistics = Loadable({
    loader: () => import('../../statistics/index'), loading() {
        return < ReactLoading />
    }
});
const Commodity = Loadable({
    loader: () => import('../../commodity/index'), loading() {
        return < ReactLoading />
    }
});
const HotGoods = Loadable({
    loader: () => import('../../hotgoods/index'), loading() {
        return < ReactLoading />
    }
});
const Error404 = Loadable({
    loader: () => import('../../error/index'), loading() {
        return < ReactLoading />
    }
});

export default [
    { path: "/statistics", component: Statistics, permission: 1, exact: false },
    { path: "/hotgoods", component: HotGoods, permission: 1, exact: false },
    { path: "/work/commodity", component: Commodity, permission: 5, exact: false },
    { path: "/error/404", component: Error404 },
]