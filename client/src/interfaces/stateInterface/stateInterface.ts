

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
