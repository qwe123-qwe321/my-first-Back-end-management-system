// src/components/NavigationButtons.tsx
import { Button } from 'antd';
import { LeftOutlined, RightOutlined, SyncOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface NavigationButtonsProps {
  isDark: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({ isDark }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-1">
      <Button
        type="text"
        icon={<LeftOutlined style={{ fontSize: '16px', color: isDark ? '#fff' : '#111' }} />}
        onClick={() => navigate(-1)}
        className="hover:bg-gray-200/20 rounded-full p-2 transition-all"
      />
      <Button
        type="text"
        icon={<RightOutlined style={{ fontSize: '16px', color: isDark ? '#fff' : '#111' }} />}
        onClick={() => navigate(1)}
        className="hover:bg-gray-200/20 rounded-full p-2 transition-all"
      />
      <Button
        type="text"
        icon={<SyncOutlined style={{ fontSize: '16px', color: isDark ? '#fff' : '#111' }} />}
        onClick={() => window.location.reload()}
        className="hover:bg-gray-200/20 rounded-full p-2 transition-all"
      />
    </div>
  );
};