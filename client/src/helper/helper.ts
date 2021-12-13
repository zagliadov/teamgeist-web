



export const clearLocalStorage = () => {
    return localStorage.clear();
}
export const localStorageGetItem = (name: string) => {
    if (!localStorage.getItem(name)) return;
    return localStorage.getItem(name);
}



