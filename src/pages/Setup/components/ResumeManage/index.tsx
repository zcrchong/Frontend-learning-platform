import { useState } from 'react';
import { Upload, message, Modal, Table, Empty, Card } from 'antd';
import { InboxOutlined, EyeOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const columns = [
  {
    title: '文件名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '上传时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '审核状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    render: () => (
      <a>
        <EyeOutlined />
      </a>
    ),
  },
];

const ResumeUpload = () => {
  const [visible, setVisible] = useState(false);
  const [resumeData, setResumeData] = useState(null);

  const props = {
    name: 'file',
    accept: '.pdf',
    action: 'https://jsonplaceholder.typicode.com/posts',
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        setVisible(true);
        setResumeData({
          // @ts-ignore
          name: info.file.name,
          time: new Date().toLocaleString(),
          status: '审核中',
        });
      } else if (status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    },
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Card title="简历管理" bordered={false} style={{ width: 1400 }}>
      {resumeData ? (
        <Table columns={columns} dataSource={[resumeData]} pagination={false} />
      ) : (
        <Empty description="暂无简历" />
      )}
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或拖拽文件到此处上传</p>
      </Dragger>
      <Modal title="提示" visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <p>简历提交成功，正在审核中...</p>
      </Modal>
    </Card>
  );
};

export default ResumeUpload;
