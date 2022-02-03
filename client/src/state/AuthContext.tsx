import { FC, createContext, useState } from "react";

export const AuthContext: any = createContext([]);

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false);
  // token = 'jwtstring';
  // salt = 'super_secret_string';
  // const parsedToken = jwt.parse(token, salt);
  /*
  currentUser = {
    name: 'Dmitry',
    role: 'admin',
    expired_at: 'time'
  }
  */
  // localStorage.set('token', token);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
