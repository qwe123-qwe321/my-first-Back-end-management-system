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