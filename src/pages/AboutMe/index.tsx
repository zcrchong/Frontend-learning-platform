import { Card, Col, Image, Row, Typography } from 'antd';
const { Title, Paragraph } = Typography;

const AuthorPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Card hoverable>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Image src="./imgs/author.png" />
          </Col>
          <Col xs={24} md={16}>
            <Typography>
              <Title level={2}>码者个人介绍</Title>
              <Paragraph>
                左超然，天津科技大学2024届本科生在读，2023年3月1日起于美团点评事业部从事前端开发
              </Paragraph>
            </Typography>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default AuthorPage;
