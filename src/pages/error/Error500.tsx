// 500错误页面：显示服务器内部错误的提示信息，提供刷新重试和返回首页的操作入口
import React from 'react';
import ErrorPage from './ErrorPage';

const Error500: React.FC = () => {
  return (
    <ErrorPage
      code="500"
      message="抱歉，服务器出错了。"
    />
  );
};

export default Error500;