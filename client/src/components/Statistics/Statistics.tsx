import { Divider } from "antd";
import { FC, useState } from "react";
import StatisticsHeader from "./components/StatisticsHeader/StatisticsHeader";
import StatisticsList from "./components/StatisticsList/StatisticsList";

const Statistics: FC = () => {
  const [timeStep, setTimeStep] = useState<string>("week");

<<<<<<< HEAD
  return (
    <>
      <StatisticsHeader timeStep={timeStep} setTimeStep={setTimeStep} />
      <Divider />
      <StatisticsList timeStep={timeStep} />
    </>
  );
=======
    const [timeStep, setTimeStep] = useState<string>('week');

    return (
        <>
            <StatisticsHeader timeStep={timeStep} setTimeStep={setTimeStep}/>
            <Divider />
            <StatisticsList timeStep={timeStep} />
            
        </>
    );
>>>>>>> 325760484e0c60b8111aae281b5431e2ddec0457
};

export default Statistics;
