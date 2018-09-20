import React from 'react';
import { Form, Icon, Tooltip, Input, Checkbox, Button } from 'antd';
const FormItem = Form.Item;

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6}
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14}
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 14,
                offset: 6,
              },
            },
        };
        
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    label={(
                        <span>
                            用户名
                            <Tooltip title="用户名必须是1-16为字母数字，下划线，不能以数字开头">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                    {...formItemLayout}
                    hasFeedback
                >
                    {
                        getFieldDecorator('username', {
                            rules: [{
                                required: true, message: '请输入用户名'
                            }]
                        })(
                            <Input type="user" placeholder="用户名" />
                        )
                    }
                </FormItem>
                <FormItem
                    label="E-mail地址"
                    {...formItemLayout}
                    hasFeedback
                >
                    {
                        getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: '请输入正确的E-mail地址'
                            }, {
                                required: true, message: '请输入E-mail地址'
                            }]
                        })(
                            <Input placeholder="E-mail地址" />
                        )
                    }
                </FormItem>
                <FormItem
                    label="密码"
                    {...formItemLayout}
                    hasFeedback
                >
                    {
                        getFieldDecorator('password', {
                            rules: [{
                                required: true, message: '请输入密码'
                            }]
                        })(
                            <Input type="password" placeholder="密码" />
                        )
                    }
                </FormItem>
                <FormItem
                    label="确认密码"
                    {...formItemLayout}
                    hasFeedback
                >
                    {
                        getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: '请再次确认密码'
                            }]
                        })(
                            <Input type="password" placeholder="确认密码" />
                        )
                    }
                </FormItem>
                <FormItem
                    {...tailFormItemLayout}
                >
                    {
                        getFieldDecorator('agreement', {
                            valuePropName: 'checked'
                        })(
                            <Checkbox>我已阅读<a>agreement</a></Checkbox>
                        )
                    }
                </FormItem>
                <FormItem
                    {...tailFormItemLayout}
                >
                    <Button type="primary" htmlType="submit">确定</Button>
                </FormItem>
            </Form>
        )
    }
}

SignUpForm = Form.create()(SignUpForm)

export default SignUpForm;