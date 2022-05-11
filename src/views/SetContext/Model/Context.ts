import { createContext } from 'react';
import useModel from './useModel';

export default createContext<ReturnType<typeof useModel> | null>(null);
