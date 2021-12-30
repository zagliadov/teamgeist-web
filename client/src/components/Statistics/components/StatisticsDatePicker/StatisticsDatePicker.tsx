import { DatePicker, Select, Space } from 'antd';
import { FC, useState } from 'react';
import moment from 'moment';


const { Option } = Select;

const StatisticsDatePicker: FC = () => {

    let [timeStep, setTimeStep] = useState<moment.unitOfTime.StartOf>('week');
    const weekFormat = 'DD.MM.YYYY',
        monthFormat = 'MMMM.YYYY';
    const handleChange = (value: any) => {
        setTimeStep(value);
    }
    const weekOrMonth = (timeStep === 'week') ? weekFormat : monthFormat;

    const customWeekStartEndFormat = (value: any) =>
        `    ${moment(value).startOf(timeStep).format(weekOrMonth)} 
        ${(weekOrMonth !== monthFormat) ? '         -       ' + moment(value)
            .endOf(timeStep)
            .format(weekOrMonth) : ''}`;



    return (
        <>
            <Space>
                <Select
                    defaultValue="week"
                    onChange={handleChange}
                    style={{ width: 160 }}>
                    <Option value="week">Неделя</Option>
                    <Option value="month">Месяц</Option>
                </Select>

                <DatePicker
                    suffixIcon={null}
                    style={{ width: '300px' }}
                    popupStyle={{ width: '300px' }}
                    defaultValue={moment()}
                    format={customWeekStartEndFormat}
                    picker={(timeStep === 'week') ? 'week' : 'month'} />
            </Space>
        </>
    );
};

export default StatisticsDatePicker;