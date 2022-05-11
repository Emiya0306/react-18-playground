import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

function BatchHook() {
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
      ReactDOM.unstable_batchedUpdates(() => {
        console.log(ref.current);
        setValue(ref.current + 1);
        console.log(ref.current);
        setValue(ref.current + 1);
        console.log(ref.current);
      });
    });
  }, []);

  console.log('render batch hook', value);
  return (
    <>
      <div>Hook</div>
      <div>
        <button onClick={handleClick}>Update state</button>
      </div>
    </>
  );
}

export default React.memo(BatchHook);
