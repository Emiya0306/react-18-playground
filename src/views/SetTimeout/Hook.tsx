import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';

function Hook() {
  const [value, setValue] = useState(0);
  const ref = useRef(value);

  useLayoutEffect(() => {
    ref.current = value;
  });

  const handleClick = useCallback(() => {
    setValue(ref.current + 1);
    console.log(ref.current);
    setValue(ref.current + 1);
    console.log(ref.current);

    setTimeout(() => {
      console.log(ref.current);
      setValue(ref.current + 1);
      console.log(ref.current);
      setValue(ref.current + 1);
      console.log(ref.current);
    });
  }, []);

  console.log('render hook', value);
  return (
    <>
      <div>Hook</div>
      <div>
        <button onClick={handleClick}>Update state</button>
      </div>
    </>
  );
}

export default React.memo(Hook);
