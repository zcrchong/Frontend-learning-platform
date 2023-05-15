import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Card } from 'antd';

const App: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Card title="消息设置" bordered={false} style={{ width: 1300, height: 700 }}>
      <h4>私信设置</h4>
      <span>允许谁给我发私信:</span>
      <Radio.Group onChange={onChange} value={value} style={{ paddingLeft: 100, paddingTop: 20 }}>
        <Radio style={{ paddingLeft: 100 }} value={1}>
          所有人
        </Radio>
        <Radio style={{ paddingLeft: 100 }} value={2}>
          我关注的人
        </Radio>
        <Radio style={{ paddingLeft: 100 }} value={3}>
          互相关注的人
        </Radio>
        <Radio style={{ paddingLeft: 100 }} value={4}>
          关闭(不允许任何人给我发私信)
        </Radio>
      </Radio.Group>
    </Card>
  );
};

export default App;
