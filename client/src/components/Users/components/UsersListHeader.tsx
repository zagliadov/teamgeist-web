import { FC, useState } from 'react';
import { Col, Button, Typography, Row, Modal } from 'antd';
import '../../App/app.sass';
import AddUserForm from './AddUserForm';
const { Title } = Typography;


const UsersListHeader: FC = () => {

    const [visible, setVisible] = useState<boolean>(false);
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

    const showModal = () => {
        setVisible(true);
    }
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <Row>
            <Col span={12}>
                <Title level={3}>
                    Список пользователей
                </Title>
            </Col>
            <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button className="brand__btn"
                    onClick={showModal}>
                    Добавить пользователя
                </Button>
            </Col>
            <Modal
                title="Добавить пользователя"
                visible={visible}
                onOk={handleOk}
                footer={null}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                maskClosable={false}
            >
        
            <AddUserForm setVisible={setVisible}/>
            </Modal>
        </Row>
    );
};

export default UsersListHeader;