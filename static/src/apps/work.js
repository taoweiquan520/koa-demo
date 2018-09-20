import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import HeaderNav from '../components/header-nav';
import FooterCommon from '../components/footer-common';
import 'antd/dist/antd.css';

const { Content } = Layout;

class Work extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <HeaderNav />
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '12px 0'}}>
                        <Breadcrumb.Item>Work</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{backgroundColor: '#fff', padding: 24, minHeight: 280}}>
                        work
                    </div>
                </Content>
                <FooterCommon />
            </Layout>
        )
    }
}

export default Work;