import {IValueFromLoginForm} from '../interfaces/componentsInterface';



export const clearLocalStorage = () => {
    return localStorage.clear();
}
export const localStorageGetItem = (name: string) => {
    if (!localStorage.getItem(name)) return;
    return localStorage.getItem(name);
}

// export const findUser = (obj: IValueFromLoginForm[], values) => {
//     obj.filter((item: IValueFromLoginForm) => {
//         return item.email === values.email
//     });
// }