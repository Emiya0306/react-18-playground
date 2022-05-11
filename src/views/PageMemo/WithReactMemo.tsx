import React, { useCallback, useEffect, useState } from 'react';
import ComponentWithMemo from "../../components/ComponentWithMemo";

interface Child {
  id: string;
  children: Child[];
}

// 生成 30*30*30 数组
const get30Children = (level: number = 0, children: Child[] = []) => (
  Array.from({ length: 30 }, (v, i) => ({ id: `${level}-${i}`, children }))
);
const list27000 = get30Children(1, get30Children(2, get30Children(3)));

export default function WithReactMemo() {
  // State
  const [timestamp, setTimestamp] = useState(Date.now());
  const [auto, setAuto] = useState(false);
  const start = performance.now();
  // 方法
  const handleTimestamp = useCallback(() => setTimestamp(Date.now()), []);
  const handleStartAuto = useCallback(() => setAuto(true), []);
  const handleStopAuto = useCallback(() => setAuto(false), []);
  // 输出耗时
  useEffect(() => console.log(performance.now() - start));
  // 启停定时器
  useEffect(() => {
    if (auto) setTimeout(handleTimestamp, 100);
  }, [auto, handleTimestamp, timestamp]);

  return (
    <div>
      <h2>当函数组件有React.memo</h2>
      <div>时间戳：{timestamp}
        <button onClick={handleStartAuto}>启动</button>
        <button onClick={handleStopAuto}>暂停</button>
        <button onClick={handleTimestamp}>更新</button>
      </div>
      <div>
        {list27000.map((item) => (
          <ComponentWithMemo
            key={item.id}
            id={item.id}
            children={item.children}
            onClick={handleStartAuto}
          />
        ))}
      </div>
    </div>
  );
}
