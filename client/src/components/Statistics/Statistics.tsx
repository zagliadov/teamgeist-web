import { Divider } from "antd";
import { FC } from "react";
import StatisticsHeader from "./components/StatisticsHeader/StatisticsHeader";
import StatisticsList from "./components/StatisticsList/StatisticsList";

const Statistics: FC = () => {

  return (
    <>
      <StatisticsHeader
      />
      <Divider />
      <StatisticsList />
    </>
  );
};

export default Statistics;
