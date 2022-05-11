import { createContext } from 'react';
import useUser from './useUser';

export default createContext<ReturnType<typeof useUser> | null>(null);
