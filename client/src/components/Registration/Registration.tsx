import { FC, useState, useContext } from 'react';
import { Button, Form, Space, Input, Modal, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';


const Registration: FC = () => {

    const [isModalVisible, setIsModalVisible] = useState(true);
    const handleOk = () => {
        setIsModalVisible(false);
    };

    return (
    <Modal
        title="Регистрация"
        visible={isModalVisible}
        closable={false}
        maskStyle={{ background: 'silver' }}
        onOk={handleOk}
        centered={true}
        footer={null}
        maskClosable={false}>
        </Modal>)
};

export default Registration;