import { Col, Row } from 'antd';
import React from 'react';
import Navbar from './components/Navbar/index';
import PersonalInfoForm from './components/PersonalInfoForm';
const App: React.FC = () => (
  <Row gutter={[16, 16]}>
    <Col span={18} push={6}>
      {/*个人资料*/}
      <PersonalInfoForm />
      账号设置 Account Settings 消息设置 message settings 简历管理 resume management 屏蔽管理 Shield
      management 标签管理 Tag management
    </Col>
    <Col span={6} pull={18}>
      <Navbar />
    </Col>
  </Row>
);

export default App;
