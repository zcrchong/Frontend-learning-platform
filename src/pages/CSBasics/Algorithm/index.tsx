import { history } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';

const JsPage: React.FC = () => (
  <Button type="primary" onClick={() => history.push('/')}>
    数据结构与算法
  </Button>
);

export default JsPage;
