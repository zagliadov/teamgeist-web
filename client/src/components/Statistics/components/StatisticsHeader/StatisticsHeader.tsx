import { FC, useContext, useEffect } from 'react';
import { AppContext } from '../../../../state/AppContext';
import { getAllUser } from '../../../../state/controllers/statisticsControllers';
import { USER_GETALLUSER } from '../../../../state/actions';
import {
    ReloadOutlined
} from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import StatisticsDatePicker from '../StatisticsDatePicker/StatisticsDatePicker';

const { Text } = Typography;

interface IProps {
    timeStep: string;
    setTimeStep: (arg0: string) => void;
}



const StatisticsHeader: FC<IProps> = ({ timeStep, setTimeStep }) => {

    const [state, dispatch] = useContext(AppContext);

    const handelClick = async () => {
        dispatch({
            type: USER_GETALLUSER,
            payload: await getAllUser("2022-01-14")
        });
    }


    useEffect(() => {
        handelClick();
        console.log('state on effect', state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Row>
            <Col span={16}>
                <StatisticsDatePicker
                    setTimeStep={setTimeStep}
                    timeStep={timeStep}
                />
            </Col>
            <div>
                {state.statistics && state.statistics.map((item: any) => {
                    return <p key={item.id}>{item.id}</p>
                })}
            </div>
            <Col span={8} style={{
                textAlign: 'end',
                paddingRight: '5px'
            }}>
                <Button
                    type='text'
                    style={{ background: 'transparent', color: '#03A473' }}
                    onClick={() => {
                        setTimeStep('week');
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