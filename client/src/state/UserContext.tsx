import { FC, createContext, useState } from "react";
import { IUser } from "../interfaces/stateInterface/stateInterface";

export const UserContext: any = createContext([]);

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser[]>([
    {
      key: "1",
      lastName: "Brown",
      firstName: "John",
      email: "test",
      project: ["teamgeist "],
      userType: "developer",
      password: "000",
      status: "Открыт",
      description: "Разработка сервиса",
      projectType: "Внешний",
    },
    {
      key: "2",
      lastName: "test",
      firstName: "John",
      email: "admin",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "Внутренний проект",
      projectType: "Внутренний",
    },
    {
      key: "3",
      lastName: "Zahliadov",
      firstName: "Daniil",
      email: "daniil@gmail.com",
      project: ["teamgeist "],
      userType: "developer",
      password: "000",
      status: "Удален",
      description: "description",
      projectType: "Внутренний",
    },
    {
      key: "4",
      lastName: "Zahliadov",
      firstName: "Petro",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "description",
      projectType: "Внешний",
    },
    {
      key: "5",
      lastName: "Zahliadov",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Удален",
      description: "description",
      projectType: "Внешний",
    },
    {
      key: "6",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Удален",
      description: "description",
      projectType: "Внешний",
    },
    {
      key: "7",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "description",
      projectType: "Внешний",
    },
    {
      key: "8",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "description",
      projectType: "Внутренний",
    },
    {
      key: "9",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "description",
      projectType: "Внешний",
    },
    {
      key: "10",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "description",
      projectType: "Внешний",
    },
    {
      key: "11",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "description",
      projectType: "Внешний",
    },
    {
      key: "12",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "description",
      projectType: "Внешний",
    },
    {
      key: "13",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "description",
      projectType: "Внутренний",
    },
    {
      key: "14",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "description",
      projectType: "Внутренний",
    },
    {
      key: "15",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "description",
      projectType: "Внешний",
    },
    {
      key: "16",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "description",
      projectType: "Внутренний",
    },
    {
      key: "17",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "description",
      projectType: "Внешний",
    },
    {
      key: "18",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "description",
      projectType: "Внешний",
    },
    {
      key: "19",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Удален",
      description: "description",
      projectType: "Внешний",
    },
    {
      key: "20",
      lastName: "Brown",
      firstName: "John",
      email: "test@gmail.com",
      project: ["teamgeist "],
      userType: "admin",
      password: "000",
      status: "Открыт",
      description: "description",
      projectType: "Внутренний",
    },
  ]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

