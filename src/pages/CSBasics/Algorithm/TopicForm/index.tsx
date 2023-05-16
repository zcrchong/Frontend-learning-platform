// import { useState, useEffect } from 'react';
// import { Layout, Table } from 'antd';
// import axios from 'axios';
// import cheerio from 'cheerio';
// const { Content } = Layout;
//
// const columns = [
//   {
//     title: '问题',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: '难度',
//     dataIndex: 'level',
//     key: 'level',
//   },
//   {
//     title: '通过率',
//     dataIndex: 'acceptance',
//     key: 'acceptance',
//   },
// ];
//
// const Leetcode = () => {
//   const [data, setData] = useState([]);
//
//   useEffect(() => {
//     // 发送HTTP请求获取数据
//     axios.get('https://leetcode-cn.com/problemset/all/').then((response) => {
//       const $ = cheerio.load(response.data);
//
//       // 解析HTML得到数据
//       const rows = $('table').eq(1).find('tbody > tr');
//       // const problems = [];
//
//       rows.each((_, row) => {
//         const problem = {};
//         problem.name = $(row)
//           .find('td')
//           .eq(1)
//           .find('a')
//           .text()
//           .replace(/\s+/g, ''); // 去除所有空白字符
//         problem.level = $(row).find('td').eq(3).text();
//         problem.acceptance = $(row).find('td').eq(4).text();
//         problems.push(problem);
//       });
//
//       setData(problems);
//     });
//   }, []);
//
//   return (
//     <Layout>
//       <Content>
//         <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} />
//       </Content>
//     </Layout>
//   );
// };
//
// export default Leetcode;
