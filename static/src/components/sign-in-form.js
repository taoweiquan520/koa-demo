import React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import {signIn} from '../api';

const FormItem = Form.Item;

class SignInForm extends React.Component {
    constructor(props) {
        super(props);

        this.getFormValue = this.getFormValue.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        const values = await this.getFormValue();
        console.log(values)
        if (values) {
            let res = signIn(values);
            console.log(res)
        } else {
            message.error('系统繁忙，请稍后重试！')
        }
    }

    getFormValue() {
        let that = this;
        return new Promise((resolve, reject) => {
            that.props.form.validateFields((err, value) => {
                if (!err) {
                    resolve(value);
                } else {
                    reject(err);
                }
            })
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} className="login-form" style={{width: 280, margin: '0 auto'}}>
                <FormItem>
                {
                    getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请您输入用户名!' }]
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                    )
                }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('password', {
                            rules: [{required: true, message: '请您输入密码!'}]
                        })(
                            <Input prefix={<Icon type="lock" style={{fontSize: 13}} />} type="password" placeholder="密码" />
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(
                            <Checkbox>记住我</Checkbox>
                        )
                    }
                    <a className="login-form-forgot">忘记密码</a>
                    <br />
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        确定
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

SignInForm = Form.create()(SignInForm);

export default SignInForm;