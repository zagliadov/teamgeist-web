import { FC, useContext, useEffect } from "react";
import { ReloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import StatisticsDatePicker from "../StatisticsDatePicker/StatisticsDatePicker";
import { AppContext } from "../../../../state/AppContext";
import { ActionType } from "../../../../state/actions";
import moment from "moment";

const { Text } = Typography;

const StatisticsHeader: FC = () => {
  const [state, dispatch] = useContext(AppContext);
  const handleClick = () => {
    dispatch({
      type: ActionType.SET_TIME_STEP,
      payload: "week",
    });
    dispatch({
      type: ActionType.SET_MONTH_STRING,
      payload: moment().format('MMMM.YYYY'),
    });
  };
  useEffect(() => {
    console.log(state)
  }, [state])
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
