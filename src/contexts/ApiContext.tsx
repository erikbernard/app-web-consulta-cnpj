import { createContext, ReactNode, useState } from 'react';

interface ApiContextData {
    resquest: string,
    setResquest: (value: string) => void;
}
interface ApiContextProviderProps {
    children: ReactNode;
}

export const ApiContext = createContext({} as ApiContextData);

export function ApiContextProvider({children}: ApiContextProviderProps){
    const [resquest, setResquest ] = useState('');

    return(
        <ApiContext.Provider 
            value={{resquest, setResquest}}>
            {children}
        </ApiContext.Provider>
    );
}