import React, { Component } from 'react';
import {
    RiseOutlined,
    FallOutlined,
    DownOutlined
} from '@ant-design/icons';
import { Menu, Dropdown, Button, Table, Tag, Space } from 'antd';
import "./statistics.less";
import await_pho from "@/images/await_pho.png";
import order_pho from "@/images/order_pho.png";
import sales_pho from "@/images/sales_pho.png";
import user_pho from "@/images/user_pho.png";
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线图
import 'echarts/lib/chart/line';
import 'echarts/lib/component/grid';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import { Footer } from 'antd/lib/layout/layout';
class Statistics extends React.Component {
    constructor() {
        super()
        this.state = {
            headerList: [
                {
                    title: "全部用户",
                    allNum: "40.689",
                    icons: 1,
                    percentage: "8.5%",
                    percen_name: "昨天增长",
                    figure: user_pho
                },
                {
                    title: "全部订单",
                    allNum: "10293",
                    icons: 1,
                    percentage: "1.3%",
                    percen_name: "从上星期起",
                    figure: order_pho
                },
                {
                    title: "总销售额",
                    allNum: "89.000",
                    icons: 0,
                    percentage: "4.3%",
                    percen_name: "从昨天开始",
                    figure: sales_pho
                },
                {
                    title: "待处理数",
                    allNum: "2040",
                    icons: 1,
                    percentage: "1.8%",
                    percen_name: "从昨天开始",
                    figure: await_pho
                }
            ],
            monthNum: 1
        }
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            grid: {
                x: 60,
                y: 20,
                x2: 60,
                y2: 60
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }]
        });
    }
    handleMenuClick = ({ key }) => {
        this.setState({
            monthNum: key
        })
    }
    render() {
        let month = [];
        for (let i = 1; i <= 12; i++) {
            month.push(
                <Menu.Item key={i}>
                    {i} 月
                </Menu.Item>
            )
        }
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                {
                    month
                }
            </Menu>
        );
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a>Invite {record.name}</a>
                        <a>Delete</a>
                    </Space>
                ),
            },
        ];

        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ];
        return (
            <div>
                <h2 style={{ "font-weight": "600" }}>数据统计</h2>
                <header className="header">
                    {
                        this.state.headerList.map((item, index) => {
                            return (
                                <div className="header_con" key={index}>
                                    <div className="header_lef">
                                        <p>{item.title}</p>
                                        <p style={{ "font-size": "24px", color: "#333333" }}>{item.allNum}</p>
                                        <p className={item.icons > 0 ? "riseout" : "fallout"}>
                                            {item.icons > 0 ? <RiseOutlined /> : <FallOutlined />}
                                            <span style={{ "margin-left": "10px" }}>{item.percentage}</span>
                                            <span style={{ "margin-left": "40px", color: "#666666" }}>{item.percen_name}</span>
                                        </p>
                                    </div>
                                    <div className="header_rig">
                                        <img src={item.figure} className="figure" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </header>
                <div className="statics_con">
                    <div className="con_header">
                        <h3 className="echarts_title">销售明细</h3>
                        <Dropdown overlay={menu}>
                            <Button className="menu_button">
                                {this.state.monthNum} 月 <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                    <div id="main" style={{ width: "100%", height: 440 }}></div>
                </div>
                <Footer>
                    <Table columns={columns} dataSource={data} />
                </Footer>
            </div>
        )
    }
}

export default Statistics;