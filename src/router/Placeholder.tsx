import React from 'react';

// 炫酷的占位组件
export const Placeholder = ({ name }: { name: string }) => (
  <div className="flex flex-col items-center justify-center h-[60vh]">
    <div className="text-white/10 text-6xl font-black italic tracking-tighter uppercase mb-4">
      {name}
    </div>
    <div className="h-1 w-24 bg-linear-to-r from-cyan-500 to-transparent"></div>
    <p className="mt-4 text-cyan-500/50 animate-pulse tracking-widest text-xs">
      ARCHIVE MODULE INITIALIZING...
    </p>
  </div>
);
