import useModel from './useModel';
export type ModelContextType = ReturnType<typeof useModel>;

export { default as ModelProvider } from './Provider';
export { default as ModelContext } from './Context';
export { default as useModelContext } from './useContext';
