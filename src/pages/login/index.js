import React, { Component } from 'react';
import './login.css';
import { connect } from 'react-redux';
import { authedLogin } from "../../store/actions";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import workLogin from "../../images/work_login.png";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 30 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 30 },
};

class Login extends Component {
    render() {
        const onFinish = (values) => {
            this.props.authedLogin();
            if (this.props.value) {
                this.props.history.push('/')
            }
        };
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className="login">
                <div className="login-form">
                    <div className="form-image">
                        <img src={workLogin} style={{ width: "400px", height: "300px" }} />
                    </div>
                    <div>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item >
                                <h2>跨境电商管理系统</h2>
                            </Form.Item>
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '请输入账号!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '请输入密码!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.loginReducer.authed
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     addAction(num) {
//         dispatch(addAction(num))
//     }
// })

export default connect(mapStateToProps, { authedLogin })(Login);