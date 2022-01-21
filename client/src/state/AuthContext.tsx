import { FC, createContext, useState } from "react";

export const AuthContext: any = createContext([]);

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
