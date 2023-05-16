import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import './style.css'; // 导入样式文件

const languages = [
  {
    name: 'JavaScript',
    logo: 'logo-javascript',
    link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
  },
  {
    name: 'Java',
    logo: 'logo-java',
    link: 'https://www.java.com/zh-CN/',
  },
  // 其它语言
];

export default function TagList() {
  const handleClick = (link: any) => {
    window.open(link);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={20}>
        {languages.map((item) => (
          <Col span={6} key={item.name}>
            <Card
              hoverable
              cover={<div className={`logo ${item.logo}`} />}
              onClick={() => handleClick(item.link)}
            >
              <div style={{ textAlign: 'center' }}>{item.name}</div>
              <div style={{ marginTop: '10px' }}>
                <Button type="primary" style={{ width: '100%' }}>
                  已关注
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
