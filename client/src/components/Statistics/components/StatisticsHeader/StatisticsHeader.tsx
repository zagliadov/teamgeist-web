import { FC, useContext, useEffect } from 'react';
import {
    ReloadOutlined
} from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import StatisticsDatePicker from '../StatisticsDatePicker/StatisticsDatePicker';

import { AppContext } from '../../../../state/AppContext';
import { USER_GETALLUSER } from '../../../../state/actions';
import { initialState } from '../../../../state/reducer';

const { Text } = Typography;

interface IProps {
    timeStep: string;
    setTimeStep: (arg0: string) => void;
}

const StatisticsHeader: FC<IProps> = ({timeStep, setTimeStep}) => {

    const [state, dispatch] = useContext(AppContext);

    const handleClick = () => {
        dispatch({
            type: USER_GETALLUSER,
            //  payload: await getAllUser()
        });

    }
    useEffect(() => {
        console.log(state, 'state')
    }, [state, initialState]);


    return (
        <Row>
            <Col span={16}>
                <StatisticsDatePicker
                    setTimeStep={setTimeStep}
                    timeStep={timeStep}
                />
            </Col>

            <Col span={8} style={{
                textAlign: 'end',
                paddingRight: '5px'
            }}>
                <Button
                    type='text'
                    style={{ background: 'transparent', color: '#03A473' }}
                    onClick={() => {
                        setTimeStep('week');
                        handleClick();
                    }}
                >
                    <ReloadOutlined />
                </Button>
                <Text style={{ color: '#03A473' }}>Текущая неделя</Text>
            </Col>

        </Row>
    );
};

export default StatisticsHeader;