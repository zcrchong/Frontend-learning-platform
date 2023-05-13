import { history } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';

const JsPage: React.FC = () => (
      <Button type="primary" onClick={() => history.push('/')}>
        Html页面
      </Button>
);

export default JsPage;
