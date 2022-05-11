import React, { useCallback } from 'react';
import { useModelContext } from './Model';
import { useUserContext } from './User';

function Hook() {
  const [model, modelActions] = useModelContext();
  const [user, userActions] = useUserContext();

  const handleSetModel = useCallback(() => {
    modelActions.setName('name');
    modelActions.setDescription('description');

    setTimeout(() => {
      modelActions.setStatus('NORMAL');
      modelActions.setTables(['table1', 'table2']);
    });
  }, [modelActions]);

  const handleSetUser = useCallback(() => {
    userActions.setUsername('name');
    userActions.setDescription('description');

    setTimeout(() => {
      userActions.setStatus('NORMAL');
      userActions.setFriends(['table1', 'table2']);
    });
  }, [userActions]);

  console.log('render!');
  return (
    <>
      <div>Hook</div>
      <div>
        <div>{JSON.stringify(model)}</div>
        <div>{JSON.stringify(user)}</div>
        <button onClick={handleSetModel}>Set Model</button>
        <button onClick={handleSetUser}>Set User</button>
      </div>
    </>
  );
}

export default React.memo(Hook);
