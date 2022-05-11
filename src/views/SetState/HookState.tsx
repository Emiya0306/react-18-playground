import React, { useState, useCallback } from 'react';

import './style.css';

type Result1 = { key: 'state1', value: true };
type Result2 = { key: 'state2', value: true };
type Results = [Result1, Result2];

function request() {
  return new Promise<Results>(resolve => setTimeout(() => resolve([
    { key: 'state1', value: true },
    { key: 'state2', value: true }
  ]), 1000));
}

function HookState() {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);

  const setValues = useCallback((
    key: Results[number]['key'], value: Results[number]['value']
  ) => {
    switch (key) {
      case 'state1': setState1(value); break;
      case 'state2': setState2(value); break;
      default: break;
    }
  }, []);

  const handleToggle = useCallback(async () => {
    const results = await request();

    for (const result of results) {
      setValues(result.key, result.value);
    }
  }, [setValues]);

  console.log('render', state1, state2);
  return (
    <div className="hook-state">
      <h1>HookState</h1>
        <div>
          <span>state1: {JSON.stringify(state1)}</span>&nbsp;
          <span>state2: {JSON.stringify(state2)}</span>
        </div>
        <div>
          <button onClick={handleToggle}>Async Toggle State</button>
        </div>
    </div>
  );
}

export default HookState;
