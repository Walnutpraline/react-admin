import {
    AppstoreOutlined,
    FireOutlined,
    MessageOutlined,
    MenuOutlined,
    UserOutlined,
    FileSyncOutlined,
    SettingOutlined,
    ShoppingOutlined
} from '@ant-design/icons';
const MenuArr = [
    {
        title: "数据统计",
        path: "/statistics",
        icon: AppstoreOutlined,
        permission: 1,
    },
    {
        title: "热卖商品",
        path: "/hotgoods",
        icon: FireOutlined,
        permission: 1
    },
    {
        title: "商品管理",
        path: "/goods",
        icon: ShoppingOutlined,
        permission: 1
    },
    {
        title: "订单管理",
        path: "/order",
        icon: MenuOutlined,
        permission: 1
    },
    {
        title: "用户管理",
        path: "/user",
        icon: UserOutlined,
        permission: 1
    },
    {
        title: "交易记录",
        path: "/transaction",
        icon: FileSyncOutlined,
        permission: 1
    },
    {
        title: "消息",
        path: "/message",
        icon: MessageOutlined,
        permission: 1
    },
    {
        title: "设置",
        path: "/install",
        icon: SettingOutlined,
        permission: 1
    },
    //子目录设置
    // {
    //     title: "工作",
    //     path: "/work",
    //     icon: FireOutlined,
    //     permission: 2,
    //     children: [
    //         {
    //             title: "admin页面",
    //             path: "/work/commodity",
    //             icon: FireOutlined,
    //             permission: 2
    //         },
    //     ],
    // },
]
export default MenuArr;