import { Divider } from 'antd';
import { FC, useState } from 'react';
import StatisticsHeader from './components/StatisticsHeader/StatisticsHeader';
import StatisticsList from './components/StatisticsList/StatisticsList';

const Statistics: FC = () => {

    const [timeStep, setTimeStep] = useState<string>('week');

    return (
        <>
            <StatisticsHeader timeStep={timeStep} setTimeStep={setTimeStep}/>
            <Divider />
            <StatisticsList timeStep={timeStep} />
            
        </>
    );
};

export default Statistics;