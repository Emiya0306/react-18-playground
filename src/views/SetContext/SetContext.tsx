import React, { useCallback, useState } from 'react';

import { ModelProvider } from './Model';
import { UserProvider } from './User';
import Class from './Class';
import Hook from './Hook';

const TYPES = {
  NULL: 'null',
  CLASS: 'class',
  HOOK: 'hook',
} as const;

type Types = ValueOf<typeof TYPES>;

function Context() {
  const [type, setType] = useState<Types>('null');

  const handleSetClass = useCallback(() => {
    setType(TYPES.CLASS);
  }, []);

  const handleSetHook = useCallback(() => {
    setType(TYPES.HOOK);
  }, []);

  return (
    <div>
      <h1>Context</h1>
      <div>
        <button onClick={handleSetClass}>Switch To Class</button>
        <button onClick={handleSetHook}>Switch To Hook</button>
      </div>
      <div>
        {type === TYPES.NULL && <>Null</>}
        {type === TYPES.CLASS && (
          <ModelProvider>
            <UserProvider>
              <Class />
            </UserProvider>
          </ModelProvider>
        )}
        {type === TYPES.HOOK && (
          <ModelProvider>
            <UserProvider>
              <Hook />
            </UserProvider>
          </ModelProvider>
        )}
      </div>
    </div>
  );
}

export default React.memo(Context);
