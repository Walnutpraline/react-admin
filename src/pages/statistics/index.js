import React, { Component } from 'react';
import {
    RiseOutlined,
    FallOutlined,
    TeamOutlined
} from '@ant-design/icons';
import "./statistics.css"

class Statistics extends React.Component {
    render() {
        return (
            <div>
                <h2 style={{ "font-weight": "600" }}>数据统计</h2>
                <header className="header">
                    <div className="header_con">
                        <div className="header_lef">
                            <p>全部用户</p>
                            <p style={{ "font-size": "24px", color: "#333333" }}>40.689</p>
                            <p style={{ color: "#4ad991" }}>
                                <RiseOutlined />
                                <span>8.5%</span>
                                <span style={{ "margin-left": "40px", color: "#666666" }}>昨天增长</span>
                            </p>
                        </div>
                        <div className="header_rig">
                            <TeamOutlined className="icons" />
                        </div>
                    </div>
                    <div className="header_con">
                        <div className="header_lef">
                            <p>全部用户</p>
                            <p style={{ "font-size": "24px", color: "#333333" }}>40.689</p>
                            <p style={{ color: "#4ad991" }}>
                                <RiseOutlined />
                                <span>8.5%</span>
                                <span style={{ "margin-left": "40px", color: "#666666" }}>昨天增长</span>
                            </p>
                        </div>
                        <div className="header_rig">
                            <TeamOutlined className="icons" />
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Statistics;