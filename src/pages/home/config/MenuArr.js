import {
    FileOutlined,
    PicLeftOutlined
} from '@ant-design/icons';
const MenuArr = [
    {
        title: "首页",
        path: "/statistics",
        icon: PicLeftOutlined,
        permission: 1,
    },
    {
        title: "热卖商品",
        path: "/hotgoods",
        icon: PicLeftOutlined,
        permission: 1
    },
    {
        title: "工作",
        path: "/work",
        icon: FileOutlined,
        permission: 2,
        children: [
            {
                title: "admin页面",
                path: "/work/commodity",
                icon: FileOutlined,
                permission: 2
            },
        ],
    },
]
export default MenuArr;