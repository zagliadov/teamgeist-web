import { FC, createContext, useState } from "react";
import { IUserType } from "../interfaces/stateInterface/stateInterface";

export const UserTypeContext: any = createContext([]);

export const UserTypeProvider: FC = ({ children }) => {
  const [userType, setUserType] = useState<IUserType[]>([
    {
      key: "0",
      userType: "Manager",
    },
    {
      key: "1",
      userType: "Admin company",
    },
    {
      key: "2",
      userType: "Developer",
    },
    {
      key: "3",
      userType: "Owner company",
    },
  ]);

  return (
    <UserTypeContext.Provider value={[userType, setUserType]}>
      {children}
    </UserTypeContext.Provider>
  );
};
