import { Avatar, Card, Col, Row } from 'antd';
import React from 'react';
const { Meta } = Card;
const App: React.FC = () => (
  <Card
    style={{ marginTop: 16, width: 1000 }}
    type="inner"
    title="学习计划"
    extra={<a href="#">更多</a>}
  >
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://pic.leetcode.cn/1683280468-quwfIB-%E9%A2%98%E5%BA%93.png?x-oss-process=image%2Fformat%2Cwebp"
            />
          }
        >
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title="《算法图解》"
            description="'代码与图相结合，更容易理解'"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://pic.leetcode.cn/1672972118-VcrUNt-%E9%A2%98%E5%BA%93%20(2).png?x-oss-process=image%2Fformat%2Cwebp"
            />
          }
        >
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title="《零基础算法100例》"
            description="'更适合算法小白的算法题'"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://pic.leetcode.cn/1670420392-HsWoux-20221207-213706.png?x-oss-process=image%2Fformat%2Cwebp"
            />
          }
        >
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title="《机器学习》"
            description="'入门机器学习的必备书籍之一'"
          />
        </Card>
      </Col>
    </Row>
  </Card>
);

export default App;
