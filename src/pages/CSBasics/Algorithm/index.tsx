import React from 'react';
import { Card, Col, Row } from 'antd';
import BookCard from './StudyPlan/index';

const Books = () => {
  const books = [
    {
      id: 1,
      title: '悲惨世界',
      description: '这是一本好书.....',
      image: 'https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/premium-algo-100/cover',
      href: 'https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/premium-algo-100/cover',
    },
    {
      id: 2,
      title: '悲惨世界',
      description: '这是一本好书.....',
      image: 'https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/premium-algo-100/cover',
      href: 'https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/premium-algo-100/cover',
    },
    {
      id: 3,
      title: '悲惨世界',
      description: '这是一本好书.....',
      image: 'https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/premium-algo-100/cover',
      href: 'https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/premium-algo-100/cover',
    },
    {
      id: 4,
      title: '悲惨世界',
      description: '这是一本好书.....',
      image: 'https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/premium-algo-100/cover',
      href: 'https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/premium-algo-100/cover',
    },
    {
      id: 5,
      title: '悲惨世界',
      description: '这是一本好书.....',
      image: 'https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/premium-algo-100/cover',
      href: 'https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/premium-algo-100/cover',
    },
    {
      id: 6,
      title: '悲惨世界',
      description: '这是一本好书.....',
      image: 'https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/premium-algo-100/cover',
      href: 'https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/premium-algo-100/cover',
    },
  ];

  return (
    <Row>
      <Card>
        {books.map((book) => (
          <Col key={book.id} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <BookCard {...book} />
          </Col>
        ))}
      </Card>
    </Row>
  );
};

export default Books;
