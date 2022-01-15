import axios from "axios"
import { IStatistics } from '../../interfaces/stateInterface/stateInterface';

const URI = 'https://jsonplaceholder.typicode.com/users';

export const getStatistics = async (date: string) => {
    try {
        return await axios.get<IStatistics>(`http://192.168.115.51:8083/v1/receive-data?date=${date}&page=0&size=20`)
            .then(response => response.data)
            .then(data => data.content)
    } catch (error) {
        console.log(error)
    };
};

export const getUsers = async () => {
    try {
        return await axios.get<any>(`${URI}`)
            .then(response => response.data)
    } catch (error) {
        console.log(error);
    }
}