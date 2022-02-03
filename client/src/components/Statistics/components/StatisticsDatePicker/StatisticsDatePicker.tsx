import { DatePicker, Select, Space } from "antd";
import { FC, useContext } from "react";
import moment from "moment";
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import "moment/locale/ru";
import { AppContext } from "../../../../state/AppContext";
import { ActionType } from "../../../../state/actions";

const { Option } = Select;

const StatisticsDatePicker: FC = () => {
  const [state, dispatch] = useContext(AppContext);
  const { timeStep, month, weekFormat, monthFormat, year, week } = state;
  const weekOrMonth = timeStep === "week" ? weekFormat : monthFormat;

  const handleChange = (value: string) => {
    dispatch({
      type: ActionType.SET_TIME_STEP,
      payload: value,
    });
  };
  const datePickerChange = (date: any, dateString: any) => {
    dispatch({
      type: ActionType.SET_MONTH,
      payload: date.month(),
    });
    dispatch({
      type: ActionType.SET_YEAR,
      payload: date.year(),
    });
    dispatch({
      type: ActionType.SET_WEEK,
      payload: date.week(),
    });
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
              defaultValue={timeStep}
              onChange={handleChange}
              style={{ width: 160 }}
            >
              <Option value="week">Неделя</Option>
              <Option value="month">Месяц</Option>
            </Select>
          )}
          {timeStep === "month" && (
            <Select
              defaultValue={timeStep}
              onChange={handleChange}
              style={{ width: 160 }}
            >
              <Option value="month">Месяц</Option>
              <Option value="week">Неделя</Option>
            </Select>
          )}
          <DatePicker
          defaultValue={moment()}
            value={moment().month(month).year(year).week(week)}
            suffixIcon={null}
            style={{ width: "300px" }}
            popupStyle={{ width: "300px" }}
            onChange={datePickerChange}
            format={customWeekStartEndFormat}
            picker={timeStep}
          />
        </Space>
      </ConfigProvider>
    </>
  );
};

export default StatisticsDatePicker;
