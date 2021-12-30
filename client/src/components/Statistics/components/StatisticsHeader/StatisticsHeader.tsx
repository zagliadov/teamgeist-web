import { FC } from 'react';
import {
    ReloadOutlined
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import StatisticsDatePicker from '../StatisticsDatePicker/StatisticsDatePicker';

const StatisticsHeader: FC = () => {

    
    return (
        <Row>
            <Col span={16} style={{border: '1px solid red'}}>
                <StatisticsDatePicker />
            </Col>

            <Col span={8} style={{border: '1px solid red'}}>
                <Button type='text' style={{ background: 'transparent' }}>
                    <ReloadOutlined />
                </Button>
            </Col>

        </Row>
    );
};

export default StatisticsHeader;