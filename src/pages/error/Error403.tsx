import React from 'react';
import ErrorPage from './ErrorPage';

const Error403: React.FC = () => {
  return (
    <ErrorPage
      code="403"
      message="抱歉，您没有权限访问这个页面。"
    />
  );
};

export default Error403;