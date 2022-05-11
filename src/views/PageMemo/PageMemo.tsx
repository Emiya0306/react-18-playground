import React, { useCallback, useState } from 'react';

import WithReactMemo from './WithReactMemo';
import WithoutReactMemo from './WithoutReactMemo';

const TYPES = {
  CLEAR: 'clear',
  WITH_OUT_REACT_MEMO: 'with_out_react_memo',
  WITH_REACT_MEMO: 'with_react_memo',
} as const;

type Types = ValueOf<typeof TYPES>;

function PageMemo() {
  const [type, setType] = useState<Types>(TYPES.CLEAR);

  const handleWithoutReactMemo = useCallback(() => {
    setType(TYPES.WITH_OUT_REACT_MEMO);
  }, []);

  const handleWithReactMemo = useCallback(() => {
    setType(TYPES.WITH_REACT_MEMO);
  }, []);

  return (
    <>
      <h1>Memo专题页</h1>
      <div>
        <button onClick={handleWithoutReactMemo}>没有做React.memo</button>
        <button onClick={handleWithReactMemo}>做了React.memo</button>
      </div>
      {type === TYPES.CLEAR && <>请点击上面按钮，选取例子</>}
      {type === TYPES.WITH_OUT_REACT_MEMO && <WithoutReactMemo />}
      {type === TYPES.WITH_REACT_MEMO && <WithReactMemo />}
    </>
  );
}

export default React.memo(PageMemo);
