import React from 'react';
import { Card, Descriptions, Table, Tag, Typography } from 'antd';
import type { TableColumnType } from 'antd';
import {
  GithubOutlined,
  GlobalOutlined,
  BookOutlined,
  ClusterOutlined,
  CrownOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

interface Dependency {
  name: string;
  version: string;
}

const productionDeps: Dependency[] = [
  { name: 'react', version: '^19.2.4' },
  { name: 'react-dom', version: '^19.2.4' },
  { name: 'react-router-dom', version: '^7.13.1' },
  { name: 'antd', version: '^6.3.2' },
  { name: '@ant-design/icons', version: '^6.1.0' },
  { name: '@tanstack/react-query', version: '^5.90.21' },
  { name: '@tanstack/react-table', version: '^8.21.3' },
  { name: 'react-hook-form', version: '^7.72.1' },
  { name: '@hookform/resolvers', version: '^5.2.2' },
  { name: 'zod', version: '^4.3.6' },
  { name: 'zustand', version: '^5.0.11' },
  { name: 'msw', version: '^2.13.2' },
  { name: 'echarts', version: '^6.0.0' },
  { name: 'echarts-for-react', version: '^3.0.6' },
  { name: 'tailwindcss', version: '^4.2.1' },
  { name: 'class-variance-authority', version: '^0.7.1' },
  { name: 'clsx', version: '^2.1.1' },
  { name: 'tailwind-merge', version: '^3.5.0' },
  { name: 'lucide-react', version: '^1.8.0' },
];

const developmentDeps: Dependency[] = [
  { name: 'typescript', version: '^5.9.3' },
  { name: 'vite', version: '^8.0.0' },
  { name: '@vitejs/plugin-react', version: '^6.0.0' },
  { name: '@tailwindcss/vite', version: '^4.2.1' },
  { name: 'eslint', version: '^9.39.4' },
  { name: '@typescript-eslint/eslint-plugin', version: '^8.58.0' },
  { name: '@typescript-eslint/parser', version: '^8.58.0' },
  { name: 'eslint-plugin-react', version: '^7.37.5' },
  { name: 'eslint-plugin-react-hooks', version: '^7.0.1' },
  { name: 'eslint-plugin-react-refresh', version: '^0.5.2' },
  { name: 'eslint-config-prettier', version: '^10.1.8' },
  { name: 'prettier', version: '^3.8.1' },
  { name: '@types/node', version: '^24.12.0' },
  { name: '@types/react', version: '^19.2.14' },
  { name: '@types/react-dom', version: '^19.2.3' },
  { name: 'husky', version: '^9.1.7' },
  { name: 'lint-staged', version: '^16.4.0' },
  { name: 'globals', version: '^17.4.0' },
  { name: 'typescript-eslint', version: '^8.56.1' },
];

const About: React.FC = () => {
  const buildTime = new Date().toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  const columns: TableColumnType<Dependency>[] = [
    {
      title: '包名',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => (
        <Text strong className="text-blue-600">
          {text}
        </Text>
      ),
    },
    {
      title: '版本',
      dataIndex: 'version',
      key: 'version',
      render: (text: string) => <Tag color="green">{text}</Tag>,
    },
  ];

  return (
    <div className="p-6 bg-linear-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <Title level={3} className="mb-1!">
              <ClusterOutlined className="mr-2" />
              关于系统
            </Title>
            <Text type="secondary">王者荣耀后台管理系统</Text>
          </div>
          <div className="flex gap-3">
            <Tag color="success" className="text-base px-3 py-1">
              生产依赖 {productionDeps.length}
            </Tag>
            <Tag color="processing" className="text-base px-3 py-1">
              开发依赖 {developmentDeps.length}
            </Tag>
          </div>
        </div>

        <Card
          title={
            <span>
              <CrownOutlined className="mr-2 text-yellow-500" />
              项目信息
            </span>
          }
          className="mb-6 shadow-sm"
        >
          <Descriptions column={2} bordered size="small">
            <Descriptions.Item label="项目名称">react-antd-admin</Descriptions.Item>
            <Descriptions.Item label="当前版本">v0.0.0</Descriptions.Item>
            <Descriptions.Item label="构建时间">{buildTime}</Descriptions.Item>
            <Descriptions.Item label="开源协议">MIT</Descriptions.Item>
            <Descriptions.Item label="预览地址" span={2}>
              <a
                href="https://react-antd-admin.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobalOutlined className="mr-1" />
                https://react-antd-admin.vercel.app
              </a>
            </Descriptions.Item>
            <Descriptions.Item label="文档地址" span={2}>
              <a
                href="https://react-antd-admin.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOutlined className="mr-1" />
                https://react-antd-admin.vercel.app
              </a>
            </Descriptions.Item>
            <Descriptions.Item label="Github">
              <a
                href="https://github.com/qwe123-qwe321/my-first-Back-end-management-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubOutlined className="mr-1" />
                qwe123-qwe321/my-first-Back-end-management-system
              </a>
            </Descriptions.Item>
            <Descriptions.Item label="作者">qwe123-qwe321</Descriptions.Item>
          </Descriptions>
        </Card>

        <Card
          title="生产依赖 (Dependencies)"
          className="mb-6 shadow-sm"
          extra={<Tag color="success">{productionDeps.length} 个包</Tag>}
        >
          <Table
            dataSource={productionDeps}
            columns={columns}
            rowKey="name"
            pagination={false}
            size="small"
            footer={() => (
              <div className="text-right text-gray-500">
                共 {productionDeps.length} 个依赖包
              </div>
            )}
          />
        </Card>

        <Card
          title="开发依赖 (DevDependencies)"
          className="shadow-sm"
          extra={<Tag color="processing">{developmentDeps.length} 个包</Tag>}
        >
          <Table
            dataSource={developmentDeps}
            columns={columns}
            rowKey="name"
            pagination={false}
            size="small"
            footer={() => (
              <div className="text-right text-gray-500">
                共 {developmentDeps.length} 个依赖包
              </div>
            )}
          />
        </Card>
      </div>
    </div>
  );
};

export default About;