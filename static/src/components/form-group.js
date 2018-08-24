import React from 'react';
import { Menu } from 'antd';


class FormGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'login'
        }

        this.tabClick = this.tabClick.bind(this);
    }

    tabClick() {
        this.setState({
            current: e.key
        })
    }

    render() {
        return (
            <Menu
                onClick={this.tabClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="login">登录</Menu.Item>
                <Menu.Item key="register">注册</Menu.Item>
            </Menu>
        )
    }
}

export default FormGroup;