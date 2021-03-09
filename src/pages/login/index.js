import React, { Component } from 'react';
import './login.css';
import { connect } from 'react-redux';
import { authedLogin } from "../../store/actions";
import { Form, Input, Button, Checkbox } from 'antd';
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
                        <img src={workLogin} style={{width:"300px",height:"225px"}} />
                    </div>
                    <div>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="账号"
                                name="username"
                                rules={[{ required: true, message: '请输入账号!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[{ required: true, message: '请输入密码!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>记住账号</Checkbox>
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