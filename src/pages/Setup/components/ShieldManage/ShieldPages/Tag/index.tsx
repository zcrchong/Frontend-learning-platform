import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';

const App: React.FC = () => {
  return (
    <Result
      icon={<SmileOutlined />}
      title="您当前并未屏蔽任何标签"
      extra={<Button type="primary">前往首页</Button>}
    />
  );
};

export default App;
