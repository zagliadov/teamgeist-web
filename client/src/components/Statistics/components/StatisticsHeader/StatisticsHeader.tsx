import { FC, useContext, useEffect } from 'react';
import { getUsers } from '../../../../state/controllers/statisticsControllers';
import { AppContext } from '../../../../state/AppContext';
import { ActionType } from '../../../../state/actions';
import {
    ReloadOutlined
} from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import StatisticsDatePicker from '../StatisticsDatePicker/StatisticsDatePicker';

const { Text } = Typography;

interface IProps {
    timeStep: string;
    setTimeStep: (arg0: string) => void;
};

const StatisticsHeader: FC<IProps> = ({ timeStep, setTimeStep }) => {

    const [state, dispatch] = useContext(AppContext);

    const test = async () => {
        dispatch({
            type: ActionType.STATISTICS_TEST,
            payload: await getUsers(),
        });
    };

    useEffect(() => {
        console.log(state)
    }, [state]);

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
                        test();
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