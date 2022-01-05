import { DatePicker, Select, Space } from 'antd';
import { FC, useEffect, useState } from 'react';
import moment from 'moment';


const { Option } = Select;

interface IProps {
    setTimeStep: (arg0: any) => void;
    timeStep: any;
}

const StatisticsDatePicker: FC<IProps> = ({
    setTimeStep,
    timeStep,
}) => {

    const weekFormat = 'DD.MM.YYYY',
        monthFormat = 'MMMM.YYYY';
    const weekOrMonth = (timeStep === 'week') ? weekFormat : monthFormat;


    const handleChange = (value: any) => {
        setTimeStep(value);
    }
    const handlePicker = () => {
        console.log('')
    }

    const customWeekStartEndFormat = (value: moment.MomentInput) => {
        return (
            `    ${moment(value).startOf(timeStep).format(weekOrMonth)} 
        ${(weekOrMonth !== monthFormat) ? '    -           ' + moment(value)
                .endOf(timeStep)
                .format(weekOrMonth) : ''}`
        )
    }


    useEffect(() => {

    }, [timeStep])

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
                        defaultValue={(timeStep === 'week') ? 'week' : 'month'}
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
                    onChange={() => handlePicker}
                    format={customWeekStartEndFormat}
                    picker={(timeStep === 'week') ? 'week' : 'month'} />



            </Space>
        </>
    );
};

export default StatisticsDatePicker;



