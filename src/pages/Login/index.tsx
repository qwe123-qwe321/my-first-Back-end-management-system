// 登录页面：提供用户登录表单（账号/密码），支持记住密码功能，登录成功后跳转至首页
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bgimg/wallhaven-z8oy2g.jpg';
import smallbgImage from '../../assets/bgimg/image.jpg';
import { useAppStore } from '../../store/appStore';

interface LoginValues {
  username?: string;
  password?: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const setToken = useAppStore((state) => state.setToken);
  const setUser = useAppStore((state) => state.setUser);

  const onFinish = (values: LoginValues) => {
    console.log('Received values of form: ', values);

    setToken('mock-token-' + Date.now());
    setUser({
      id: '1',
      nickname: values.username || 'Admin',
      level: 12,
      avatar: '',
    });

    message.success('登录成功！');
    navigate('/dashboard');
  };

  return (
    <div
      className="flex items-center justify-start min-h-screen w-full bg-cover bg-center px-[10%]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-row bg-gray-300 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden w-full max-w-212.5 min-h-125 border border-gray-500">
        {/* 左侧栏：放置小图片的空间 */}
        <div
          className="hidden md:flex md:w-1/2 "
          style={{ backgroundImage: `url(${smallbgImage})` }}
        ></div>

        {/* 右侧栏：登录表单 */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-gray-800 bg-opacity-80 rounded-r-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-500 flex items-center justify-center">
              欢迎登录
            </h1>
            <p className="text-gray-400 mt-2">
              Welcome back! Please enter your details.
            </p>
          </div>

          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical" // 改为垂直布局更美观
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Username"
                size="large"
                className="rounded-lg h-12 border-2 border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-300"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                prefix={<LockOutlined className="text-gray-400" />}
                type="password"
                placeholder="Password"
                size="large"
                className="rounded-lg h-12 border-2 border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-300"
              />
            </Form.Item>

            <Form.Item>
              <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox style={{ color: '#70.7% 0.165 254.624' }}>
                    Remember me
                  </Checkbox>
                </Form.Item>
                <a href="" className="text-blue-400 hover:text-blue-300">
                  Forgot password
                </a>
              </Flex>
            </Form.Item>

            <Form.Item className="mb-0">
              <Button
                block
                type="primary"
                htmlType="submit"
                size="large"
                className="h-12 rounded-lg bg-liner-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold shadow-lg"
              >
                登 录
              </Button>
              <div className="mt-6 text-center text-gray-300">
                Don't have an account?{' '}
                <a
                  href=""
                  className="text-blue-400 font-medium hover:text-blue-300"
                >
                  Register now!
                </a>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
