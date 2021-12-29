

export interface IUser {
    key: string;
    lastName: string;
    firstName: string;
    email: string;
    project: Array<string>;
    userType: string;
    password: string;
    status: 'Открыт' | 'Удален';
    description: string;
    projectType: 'Внутренний' | 'Внешний'
}

export interface IProject {
    key: string;
    projectName: string;
    status: string;
    description: string;
    projectType: string;
}

export interface IUserType {
    key: string;
    userType: string;
}