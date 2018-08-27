import React from 'react';
import { Tabs } from 'antd';
import SignInForm from './sign-in-form';
import SignUpForm from './sign-up-form';

const TabPane = Tabs.TabPane;

class FormGroup extends React.Component {
    constructor(props) {
        super(props);
        
        this.tabClick = this.tabClick.bind(this);
    }

    tabClick(key) {
        console.log(key)
    }

    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={this.tabClick}>
                <TabPane tab="登录" key="1">
                    <SignInForm />
                </TabPane>
                <TabPane tab="注册" key="2">
                    <SignUpForm />
                </TabPane>
            </Tabs>
        )
    }
}

export default FormGroup;