import { FC, useContext } from "react";
import { ReloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import StatisticsDatePicker from "../StatisticsDatePicker/StatisticsDatePicker";
import { AppContext } from "../../../../state/AppContext";
import { ActionType } from "../../../../state/actions";
import moment from "moment";

const { Text } = Typography;

const StatisticsHeader: FC = () => {
  const [, dispatch] = useContext(AppContext);

  const handleClick = () => {
    dispatch({
      type: ActionType.SET_TIME_STEP,
      payload: "week",
    });
    dispatch({
      type: ActionType.SET_MONTH,
      payload: moment().month(),
    });
    dispatch({
      type: ActionType.SET_YEAR,
      payload: moment().year(),
    });
    dispatch({
      type: ActionType.SET_WEEK,
      payload: moment().week(),
    })
  };

  return (
    <Row>
      <Col span={16}>
        <StatisticsDatePicker />
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
          onClick={() => handleClick()}
        >
          <ReloadOutlined />
        </Button>

        <Text style={{ color: "#03A473" }}>Текущая неделя</Text>
      </Col>
    </Row>
  );
};

export default StatisticsHeader;
