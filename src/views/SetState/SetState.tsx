import React from 'react';
import './style.css';
import ClassState from './ClassState';
import HookState from './HookState';

function SetState() {
  return (
    <div className="set-state">
      <ClassState />
      <HookState />
    </div>
  );
}

export default SetState;
