import axios from "axios"


interface IStatistics {
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
    }

}

export const getAllUser = async (date: string) => {
    try {
        return await axios.get<IStatistics>(`http://192.168.115.51:8083/v1/receive-data?date=${date}&page=0&size=20`)
            .then(response => response.data)
            .then(data => data.content)
    } catch (error) {
        console.log(error)
    }
}