import { DatePicker, Select, Space } from 'antd';
import { FC } from 'react';
import moment from 'moment';


const { Option } = Select;

interface IProps {
    setTimeStep: (arg0: string) => void;
    timeStep: string;
}

const StatisticsDatePicker: FC<IProps> = ({
    setTimeStep,
    timeStep,
}) => {

    const weekFormat = 'DD.MM.YYYY',
        monthFormat = 'MMMM.YYYY';
    const weekOrMonth = (timeStep === 'week') ? weekFormat : monthFormat;


    const handleChange = (value: string) => {
        setTimeStep(value);
    }
    

    const customWeekStartEndFormat = (value: moment.MomentInput) => {
        return (
            `    ${moment(value).startOf(timeStep as moment.unitOfTime.StartOf).format(weekOrMonth)} 
        ${(weekOrMonth !== monthFormat) ? '    -           ' + moment(value)
                .endOf(timeStep as moment.unitOfTime.StartOf)
                .format(weekOrMonth) : ''}`
        )
    }


    return (
        <>
            <Space>
                {(timeStep === "week") &&
                    <Select
                        defaultValue={(timeStep === 'week') ? 'week' : 'month'}
                        onChange={handleChange}
                        style={{ width: 160 }}>
                        <Option value="week">Неделя</Option>
                        <Option value="month">Месяц</Option>
                    </Select>

                }
                {(timeStep === "month") &&
                    <Select
                        defaultValue={(timeStep === 'month') ? 'month' : 'week'}
                        onChange={handleChange}
                        style={{ width: 160 }}>
                        <Option value="month">Месяц</Option>
                        <Option value="week">Неделя</Option>
                    </Select>

                }

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



