import { IUser } from './stateInterface/stateInterface';

export interface IValueFromLoginForm {
    email: string,
    password: string,
}

export interface IHeaderOption {
    id: number,
    name: string,
    to: string,
}

export interface IValueAddUserForm {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    password2: string;
    project: [string];
    userType: string;
}

export interface IPropsSetVisible {
    setVisible: (arg0: boolean) => void
}


export interface IPropsEditUserForm {
    setVisible: (arg0: boolean) => void;
    editUser: IUser;
    setEditUser: (arg0: any) => void;

}

export interface IPropsTableHeader {
    title: string;
    whatDoesTheButtonDo: string;
    modalTitle: string;
    footer?: null;
    maskClosable: boolean;
    setVisible(arg0: boolean): void;
    visible: boolean;
}