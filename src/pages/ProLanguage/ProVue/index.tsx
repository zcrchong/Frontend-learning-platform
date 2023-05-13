import { history } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';

const VuePage: React.FC = () => (
  <Button type="primary" onClick={() => history.push('/')}>
    Vue页面
  </Button>
);

export default VuePage;
