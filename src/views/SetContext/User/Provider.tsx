import React, { PropsWithChildren } from 'react';

import Context from './Context';
import useUser from './useUser'

type Props = PropsWithChildren<{}>;

function Provider(props: Props) {
  const { children } = props;
  const contextValue = useUser();

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export default React.memo(Provider);
