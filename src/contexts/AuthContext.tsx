import { ReactNode, createContext } from "react";

interface IAuthContextProps {}

interface IAuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextProps);

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
