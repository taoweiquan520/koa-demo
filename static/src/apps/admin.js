import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import HeaderNav from './../components/header-nav';
import FooterCommon from './../components/footer-common';
import FormGroup from './../components/form-group';
import 'antd/dist/antd.css';

const { Content } = Layout;

class Admin extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <HeaderNav />
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '12px 0'}}>
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{backgroundColor: '#fff', padding: '20px', minHeight: '280px'}}>
                        <FormGroup />
                    </div>
                </Content>
                <FooterCommon />
            </Layout>
        )
    }
}

export default Admin;