export interface IInitialState {
    statistics: IStatistics | [],
    user: IOneUserAnalitics | [],
    users: IAllUsers | [],
    isLoading: boolean,
};

export interface IStatistics {
    content: {
        createdAt: string,
        createdBy: number,
        deleted: boolean,
        id: number,
        userId: number,
        mouseClick: number,
        keyboardClick: number,
        screenshotImg: string,
        screenshotThumb: string,
        sentDate: string,
        updatedAd: string,
        updatedBy: number,
    };
};

export interface IAllUsers {
    content: {
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        departmentId: number,
        companyId: number,
        deleted: boolean,
    };
};

interface IStatisticsActions {
    type: string,
    payload: IStatistics,
};
interface IAllUsersAction {
    type: string,
    payload: IAllUsers
}

export type IAction = IStatisticsActions | IAllUsersAction;

export interface IOneUserAnalitics {
        activeWindow: string,
        createdAt: string,
        createdBy: number,
        deleted: boolean, 
        id: number,
        keyboardClick: number,
        memo: string,
        mouseClick: number,
        screenshotImg: string,
        screenshotThumb: string,
        sentDate: string,
        updatedAd: string,
        updatedBy: number,
        userId: number,
};









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
