import { FC } from 'react';
import {
    ReloadOutlined
} from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import StatisticsDatePicker from '../StatisticsDatePicker/StatisticsDatePicker';

const { Text } = Typography;

const StatisticsHeader: FC = () => {


    return (
        <Row>
            <Col span={16}>
                <StatisticsDatePicker />
            </Col>

            <Col span={8} style={{
                textAlign: 'end',
                paddingRight: '5px'
                }}>
                <Button type='text' style={{ background: 'transparent', color: '#03A473' }}>
                    <ReloadOutlined />
                </Button>
                <Text style={{color: '#03A473'}}>Текущая неделя</Text>
            </Col>

        </Row>
    );
};

export default StatisticsHeader;