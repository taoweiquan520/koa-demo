import React from 'react';
import { Layout, Breadcrumb, Steps } from 'antd';
import HeaderNav from './../components/header-nav';
import FooterCommon from './../components/footer-common';
import 'antd/dist/antd.css';

const { Content } = Layout;
const Step = Steps.Step;

class App extends React.Component {
    async textInput(e, str) {
        console.log(e)
        console.log(str)
    }
    render() {
        return (
            <Layout className="layout">
                <HeaderNav />
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '12px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                        <p>步骤：</p>
                        <Steps size="small" current={1}>
                            <Step title="注册" />
                            <Step title="校验" />
                            <Step title="登录" />
                        </Steps>
                        <input type="text" placeholder="请输入" onInput={this.textInput.bind(this, '参数')} />
                    </div>
                </Content>
                <FooterCommon />
            </Layout>
        )
    }
}

export default App;