import { Divider } from "antd";
import { FC, useEffect, useState } from "react";
import StatisticsHeader from "./components/StatisticsHeader/StatisticsHeader";
import StatisticsList from "./components/StatisticsList/StatisticsList";

const Statistics: FC = () => {
  const [timeStep, setTimeStep] = useState<string>("week");
  const [monthString, setMonthString] = useState<string>('')
  useEffect(() => {
    console.log(monthString)
  }, [monthString])
  return (
    <>
      <StatisticsHeader
        timeStep={timeStep}
        setTimeStep={setTimeStep}
        setMonthString={setMonthString}
      />
      <Divider />
      <StatisticsList timeStep={timeStep} monthString={monthString}/>
    </>
  );
};

export default Statistics;
