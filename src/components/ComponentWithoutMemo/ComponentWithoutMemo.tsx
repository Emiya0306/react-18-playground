import React from 'react';

interface Props {
  id: string;
  children: Props[];
  onClick?: () => void;
}

export default function ComponentWithoutMemo(props: Props) {
  const { id, children, onClick } = props;
  return (
    <>
      {/* 展示一个id */}
      <div onClick={onClick}>{id}</div>
      {/* 渲染children子组件 */}
      <div>
        {children.map(({ id: childId, children: childChildren }) => (
          <ComponentWithoutMemo
            key={childId}
            id={childId}
            children={childChildren}
            onClick={onClick}
          />
        ))}
      </div>
    </>
  );
}
