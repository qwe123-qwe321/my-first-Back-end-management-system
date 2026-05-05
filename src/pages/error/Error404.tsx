// 404错误页面：显示页面不存在的提示信息，提供返回首页的操作入口
import React from 'react';
import ErrorPage from './ErrorPage';

const Error404: React.FC = () => {
  return (
    <ErrorPage
      code="404"
      message="抱歉，您访问的页面不存在。"
    />
  );
};

export default Error404;