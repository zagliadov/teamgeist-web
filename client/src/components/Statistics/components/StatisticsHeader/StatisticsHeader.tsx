import { FC } from "react";
import { ReloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import StatisticsDatePicker from "../StatisticsDatePicker/StatisticsDatePicker";
import moment from "moment";

const { Text } = Typography;

interface IProps {
  timeStep: string;
  setTimeStep: (arg0: string) => void;
  setMonthString: (arg0: string) => void;
}

const StatisticsHeader: FC<IProps> = ({ timeStep, setTimeStep, setMonthString }) => {
  // let first =
  //   moment().date(1).format("DD.MM.YYYY") +
  //   "-" +
  //   moment().date(7).format("DD.MM.YYYY");
  // let second =
  //   moment().date(8).format("DD.MM.YYYY") +
  //   "-" +
  //   moment().date(14).format("DD.MM.YYYY");
  // let third =
  //   moment().date(15).format("DD.MM.YYYY") +
  //   "-" +
  //   moment().date(22).format("DD.MM.YYYY");
  // let fourth =
  //   moment().date(23).format("DD.MM.YYYY") +
  //   "-" +
  //   moment().date(31).format("DD.MM.YYYY");
  const handleClick = () => {

  };

  return (
    <Row>
      <Col span={16}>
        <StatisticsDatePicker setTimeStep={setTimeStep} timeStep={timeStep} setMonthString={setMonthString} />
      </Col>
      <Col
        span={8}
        style={{
          textAlign: "end",
          paddingRight: "5px",
        }}
      >
        <Button
          type="text"
          style={{ background: "transparent", color: "#03A473" }}
          onClick={() => {
            setTimeStep("week");
            handleClick();
          }}
        >
          <ReloadOutlined />
        </Button>

        <Text style={{ color: "#03A473" }}>Текущая неделя</Text>
      </Col>
    </Row>
  );
};

export default StatisticsHeader;
