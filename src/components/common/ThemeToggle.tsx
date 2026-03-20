import { Button } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

interface ThemeToggleProps {
  mode: 'dark' | 'light';
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ mode, onToggle }) => {
  const isDark = mode === 'dark';
  const textColor = isDark ? '#e5e7eb' : '#1f2937';
  const hoverBg = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)';

  return (
    <Button
      type="text"
      icon={isDark ? <SunOutlined className="text-2xl" /> : <MoonOutlined className="text-2xl" />}
      onClick={onToggle}
      style={{
        color: textColor,
        backgroundColor: 'transparent',
        borderRadius: '50%',
        padding: '8px',
        transition: 'all 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverBg}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    />
  );
};