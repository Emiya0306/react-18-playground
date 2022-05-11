import React from 'react';

interface Props {
  id: string;
  children: Props[];
  onClick?: () => void;
}

function ComponentWithMemo(props: Props) {
  const { id, children, onClick } = props;

  return (
    <>
      <div onClick={onClick}>{id}</div>
      <div>
        {children.map(({ id: childId, children: childChildren }) => (
          <ComponentWithMemo
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

export default React.memo(ComponentWithMemo);
