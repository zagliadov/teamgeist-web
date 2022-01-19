import axios from "axios"
import { IStatistics, IOneUserAnalitics } from '../../interfaces/stateInterface/stateInterface';


export const getStatistics = async (date: string) => {
    try {
        return await axios.get<IStatistics>(`http://192.168.115.51:8083/v1/receive-data?date=${date}&page=0&size=20`)
            .then(response => response.data)
            .then(data => data.content)
    } catch (error) {
        console.log(error)
    };
};


export const getOneUserAnalitics = async (id: string | undefined) => {
    try {
        return await axios.get<IOneUserAnalitics>(`http://192.168.115.51:8083/v1/receive-data/${id}`)
            .then(response => response.data)
            .then(data => data)
    } catch (error) {
        console.log(error)
    }
}

