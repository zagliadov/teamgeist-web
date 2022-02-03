import { DatePicker, Select, Space } from "antd";
import { FC, useContext } from "react";
import moment from "moment";
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import "moment/locale/ru";
import {AppContext} from '../../../../state/AppContext';
import { ActionType } from "../../../../state/actions";



const { Option } = Select;

interface IProps {
  setTimeStep: (arg0: string) => void;
  timeStep: string;
}

const StatisticsDatePicker: FC<IProps> = ({
  setTimeStep,
  timeStep,
}) => {
  const [state, dispatch] = useContext(AppContext);
  const weekFormat = "DD.MM.YYYY",
    monthFormat = "MMMM.YYYY";
  const weekOrMonth = timeStep === "week" ? weekFormat : monthFormat;

  const handleChange = (value: string) => {
    setTimeStep(value);
  };

  const customWeekStartEndFormat = (value: moment.MomentInput) => {
    return `${moment(value)
      .startOf(timeStep as moment.unitOfTime.StartOf)
      .format(weekOrMonth)} ${
      weekOrMonth !== monthFormat
        ? "-" +
          moment(value)
            .endOf(timeStep as moment.unitOfTime.StartOf)
            .format(weekOrMonth)
        : ""
    }`;
  };
  // moment.locale('ru');

  return (
    <>
      <ConfigProvider locale={ruRU}>
        <Space>
          {timeStep === "week" && (
            <Select
              defaultValue={timeStep === "week" ? "week" : "month"}
              onChange={handleChange}
              style={{ width: 160 }}
            >
              <Option value="week">Неделя</Option>
              <Option value="month">Месяц</Option>
            </Select>
          )}
          {timeStep === "month" && (
            <Select
              defaultValue={timeStep === "month" ? "month" : "week"}
              onChange={handleChange}
              style={{ width: 160 }}
            >
              <Option value="month">Месяц</Option>
              <Option value="week">Неделя</Option>
            </Select>
          )}
          <DatePicker
            suffixIcon={null}
            style={{ width: "300px" }}
            popupStyle={{ width: "300px" }}
            defaultValue={moment()}
            onChange={(date: any, dateString: string) => {
              dispatch({
                type: ActionType.SET_MONTH_STRING,
                payload: dateString,
              });
            }}
            format={customWeekStartEndFormat}
            picker={timeStep === "week" ? "week" : "month"}
          />
        </Space>
      </ConfigProvider>
    </>
  );
};

export default StatisticsDatePicker;
