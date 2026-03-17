import React from 'react';
import { Card, Row, Col, Statistic, Progress } from 'antd';
import { Line } from '@ant-design/plots';
import { ThunderboltFilled, FireFilled, TrophyFilled } from '@ant-design/icons';

const Dashboard: React.FC = () => {
  const data = [
    { month: 'Jan', value: 4500 },
    { month: 'Feb', value: 5200 },
    { month: 'Mar', value: 4800 },
    { month: 'Apr', value: 6100 },
    { month: 'May', value: 5900 },
    { month: 'Jun', value: 7200 },
  ];

  const config = {
    data,
    xField: 'month',
    yField: 'value',
    smooth: true,
    color: '#00f2ff',
    area: { style: { fill: 'l(270) 0:#00f2ff00 1:#00f2ff40' } },
  };

  return (
    <div className="animate-in fade-in duration-700 space-y-6">
      {/* 顶部指标卡 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(0,242,255,0.15)]">
            <Statistic
              title={<span className="text-white/60">当前段位战力</span>}
              value={7240}
              prefix={<ThunderboltFilled className="text-cyan-400" />}
              valueStyle={{ color: '#00f2ff', fontWeight: '900', fontSize: '28px' }}
            />
            <div className="text-cyan-400/70 text-xs mt-2">超越全服 98.5% 的玩家</div>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl">
            <Statistic
              title={<span className="text-white/60">赛季总场次</span>}
              value={358}
              prefix={<FireFilled className="text-orange-400" />}
              valueStyle={{ color: '#ff9c6e', fontWeight: '900', fontSize: '28px' }}
            />
            <Progress percent={65} size="small" strokeColor="#ff9c6e" />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl">
            <Statistic
              title={<span className="text-white/60">巅峰赛积分</span>}
              value={2150}
              prefix={<TrophyFilled className="text-yellow-400" />}
              valueStyle={{ color: '#ffec3d', fontWeight: '900', fontSize: '28px' }}
            />
            <div className="text-yellow-400/70 text-xs mt-2">排名前 500 名</div>
          </Card>
        </Col>
      </Row>

      {/* 战力曲线 */}
      <Card
        title={<span className="text-white/90 italic text-lg">SEASON POWER TREND / 赛季战力趋势</span>}
        className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl"
      >
        <div className="h-80">
          <Line {...config} />
        </div>
      </Card>

      {/* 底部推荐 + 公告 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={16}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-linear-to-r from-blue-600/20 to-transparent p-6 rounded-3xl border-l-4 border-cyan-400 backdrop-blur-md">
              <h4 className="text-white font-bold text-lg">本命英雄推荐</h4>
              <p className="text-white/70">根据你的操作习惯，建议练习：李白</p>
            </div>
            <div className="bg-linear-to-r from-purple-600/20 to-transparent p-6 rounded-3xl border-l-4 border-purple-400 backdrop-blur-md">
              <h4 className="text-white font-bold text-lg">版本上分答案</h4>
              <p className="text-white/70">当前版本 T0 级：马可波罗</p>
            </div>
          </div>
        </Col>

        <Col xs={24} md={8}>
          <Card className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl h-full">
            <h4 className="mb-4 font-bold text-white">系统公告</h4>
            <ul className="text-xs space-y-3 text-white/70">
              <li>• 赛季末冲分活动开启，战力加成 20%</li>
              <li>• 智谋熔炉实验室更新 3 套国服出装</li>
              <li>• 系统成功部署至 Vercel 节点</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;