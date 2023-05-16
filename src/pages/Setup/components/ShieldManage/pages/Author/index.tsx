import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    icon={<SmileOutlined />}
    title="您当前并未屏蔽任何作者"
    extra={<Button type="primary">前往首页</Button>}
  />
);

export default App;
