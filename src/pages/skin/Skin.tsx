import React from 'react';
import { ConfigProvider } from 'antd';
import { useSkinStore } from '../../store/skinStore';
import { Card, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const Skin: React.FC = () => {
  const { currentSkin, setSkin } = useSkinStore();

  const skins = [
    { name: '默认蓝', color: '#1677ff' },
    { name: '自然绿', color: '#52c41a' },
    { name: '浪漫紫', color: '#722ed1' },
  ];

  const handleSkinChange = (color: string) => {
    setSkin(color);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: currentSkin,
        },
      }}
    >
      <div className="flex h-full">
        <div className="w-1/3 p-4">
          {skins.map((skin) => (
            <Card
              key={skin.color}
              className="mb-4 cursor-pointer"
              style={{ borderColor: skin.color }}
              onClick={() => handleSkinChange(skin.color)}
            >
              <div
                className="h-24 rounded"
                style={{ backgroundColor: skin.color }}
              ></div>
              <div className="mt-2 text-center">
                {skin.name}
                {currentSkin === skin.color && <CheckOutlined className="ml-2" />}
              </div>
            </Card>
          ))}
        </div>
        <div className="w-2/3 p-4">
          <Button type="primary" onClick={() => alert('保存成功！')}>
            保存
          </Button>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Skin;
