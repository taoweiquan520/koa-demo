import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

import 'antd/lib/layout/style/css'

class FooterCommon extends React.Component {
    render() {
        return (
            <Footer style={{textAlign: 'center'}}>
                Hello World ©2017 Created by hello world
            </Footer>
        )
    }
}

export default FooterCommon;