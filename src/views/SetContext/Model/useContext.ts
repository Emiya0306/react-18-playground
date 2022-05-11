import { useContext } from 'react';

import context from './Context';

export default function useModelContext() {
  const modelContext = useContext(context);
  if (modelContext === null) {
    throw new Error('Can\'t find `DashboardContext` in parent nodes of Virtual DOM tree.');
  }
  return modelContext;
}
