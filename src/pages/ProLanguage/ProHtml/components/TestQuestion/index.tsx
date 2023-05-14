import { Button, Radio } from 'antd';
import { useState } from 'react';

// 题目数据：此地暂为mock，后期从后端接口中获取
const questionList = [
  {
    id: 1,
    title: '下面哪个不是 React 的生命周期方法？',
    options: ['render', 'constructor', 'componentWillUpdate', 'componentShouldUpdate'],
    answer: 'componentShouldUpdate',
  },
  {
    id: 2,
    title: 'React 的事件处理函数中需要使用什么方式绑定 this ？',
    options: ['bind(this)', '() => this', 'auto bind', '使用箭头函数'],
    answer: 'bind(this)',
  },
];

const TestQuestion = ({ mode }) => {
  const [current, setCurrent] = useState(0);

  const handleOptionChange = (e) => {
    const { value } = e.target;
    if (value === questionList[current].answer) {
      console.log('答案正确');
    } else {
      console.log('答案错误');
    }
  };

  const handleNextQuestion = () => {
    setCurrent((current + 1) % questionList.length);
  };

  return (
    <>
      <h2>{questionList[current].title}</h2>
      <Radio.Group onChange={handleOptionChange}>
        {questionList[current].options.map((option) => (
          <Radio key={option} value={option} disabled={mode !== 'exam' && mode !== 'answer'}>
            {option}
          </Radio>
        ))}
      </Radio.Group>
      {mode === 'exam' && <Button onClick={handleNextQuestion}>下一题</Button>}
      {mode === 'answer' && <p>{`正确答案：${questionList[current].answer}`}</p>}
    </>
  );
};

export default TestQuestion;
