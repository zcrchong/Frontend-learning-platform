import { Button, Card } from 'antd';
import { useState } from 'react';
import TestQuestion from './components/TestQuestion';

const KnowledgeTestPage = () => {
  // mode:模式,默认为default模式
  const [mode, setMode] = useState('default');
  // 更改模式：即下面的三个按钮可以传入对应的mode，并将更改后的mode作为props传入TestQuestion组件中，
  // TestQuestion组件根据对应的mode条件判断，显示不同状态下的页面
  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <Card>
      <Button onClick={() => handleModeChange('default')}>默认模式</Button>
      <Button onClick={() => handleModeChange('exam')}>考试模式</Button>
      <Button onClick={() => handleModeChange('answer')}>查看答案</Button>
      <TestQuestion mode={mode} />
    </Card>
  );
};

export default KnowledgeTestPage;
