

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
    project: string;
    userType: string;
}

export interface IPropsSetVisible {
    setVisible: (arg0: boolean) => void
    person?: any
}