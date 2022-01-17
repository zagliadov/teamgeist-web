
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

export interface IInitialState {
    statistics: IStatistics | [],
    isLoading: boolean,
};

interface IStatisticsActions {
    type: string,
    payload: IStatistics,
};

export type IAction = IStatisticsActions;





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
