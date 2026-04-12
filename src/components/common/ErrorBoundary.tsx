import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Result, Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });

    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    window.location.reload();
  };

  handleGoBack = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    window.history.back();
  };

  render(): ReactNode {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <Result
          status="error"
          title="页面出现了一些问题"
          subTitle={error?.message || '未知错误'}
          extra={[
            <Button
              key="reload"
              type="primary"
              icon={<ReloadOutlined />}
              onClick={this.handleReload}
            >
              刷新页面
            </Button>,
            <Button key="back" onClick={this.handleGoBack}>
              返回上一页
            </Button>,
          ]}
        />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
