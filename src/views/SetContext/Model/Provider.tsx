import React, { PropsWithChildren } from 'react';

import Context from './Context';
import useModel from './useModel'

type Props = PropsWithChildren<{}>;

function Provider(props: Props) {
  const { children } = props;
  const contextValue = useModel();

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

export default React.memo(Provider);
