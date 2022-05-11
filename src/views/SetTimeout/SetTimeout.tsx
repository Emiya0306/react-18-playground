import React, { useState, useCallback } from 'react';

import Class from './Class';
import Hook from './Hook';
import BatchClass from './BatchClass';
import BatchHook from './BatchHook';

const TYPES = {
  NULL: 'null',
  CLASS: 'class',
  HOOK: 'hook',
  BATCH_CLASS: 'batch-class',
  BATCH_HOOK: 'batch-hook',
} as const;

type Types = ValueOf<typeof TYPES>;

function SetTimeout() {
  const [type, setType] = useState<Types>('null');

  const handleSetClass = useCallback(() => {
    setType(TYPES.CLASS);
  }, []);

  const handleSetHook = useCallback(() => {
    setType(TYPES.HOOK);
  }, []);

  const handleSetBatchClass = useCallback(() => {
    setType(TYPES.BATCH_CLASS);
  }, []);

  const handleSetBatchHook = useCallback(() => {
    setType(TYPES.BATCH_HOOK);
  }, []);

  return (
    <div>
      <h1>SetTimeout</h1>
      <div>
        <button onClick={handleSetClass}>Switch To Class</button>
        <button onClick={handleSetHook}>Switch To Hook</button>
        <button onClick={handleSetBatchClass}>Switch To Batch Class</button>
        <button onClick={handleSetBatchHook}>Switch To Batch Hook</button>
      </div>
      <div>
        {type === TYPES.NULL && <>Null</>}
        {type === TYPES.CLASS && <Class />}
        {type === TYPES.HOOK && <Hook />}
        {type === TYPES.BATCH_CLASS && <BatchClass />}
        {type === TYPES.BATCH_HOOK && <BatchHook />}
      </div>
    </div>
  );
}

export default React.memo(SetTimeout);
