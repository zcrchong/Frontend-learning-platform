import React from 'react';
import { Card } from 'antd';

const App: React.FC = () => (
  <Card title="学习计划">
    <Card style={{ marginTop: 16 }} type="inner" title="1d title" extra={<a href="#">More</a>}>
      123
    </Card>
  </Card>
);

export default App;
