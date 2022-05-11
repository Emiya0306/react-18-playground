import { useContext } from 'react';

import context from './Context';

export default function useUserContext() {
  const userContext = useContext(context);
  if (userContext === null) {
    throw new Error('Can\'t find `DashboardContext` in parent nodes of Virtual DOM tree.');
  }
  return userContext;
}
