import { FC, useContext, useEffect } from 'react';
import { AppContext } from '../../state/AppContext';
import { ActionType } from '../../state/actions';
import { useParams } from 'react-router-dom';
import { Image } from 'antd';
import { getOneUserAnalitics, getStatistics } from '../../state/controllers/statistics';
import { asyncDispatch } from '../../helpers/helpers';

export const Workdiary: FC = () => {

    const [state, dispatch] = useContext(AppContext);
    // const params = useParams();

    useEffect(() => {
        asyncDispatch(
            dispatch,
            ActionType.STATISTICS_GET_STATISTICS,
            getStatistics('2022-01-17'))
    }, [dispatch])
    console.log(state.statistics)
    return (
        <div>
            {state.statistics && state.statistics.map((item: any) => {
                return (
                    <Image
                        width={200}
                        src={item.screenshotThumb}
                    />
                )
            })}


        </div>
    )
}
