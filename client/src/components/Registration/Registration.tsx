import { FC, useState, useContext } from 'react';
import { Modal, Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';


const Registration: FC = () => {

    const [isModalVisible, setIsModalVisible] = useState(true);
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const { TabPane } = Tabs;
    function callback(key: string) {
        console.log(key);
      }

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
             <Tabs onChange={callback} type="card">
                <TabPane tab="План для компании" key="1">
                Content of Tab Pane 1
                </TabPane>

                <TabPane tab="Индивидуальный план" key="2">
                Content of Tab Pane 2
                </TabPane>
            </Tabs>
        </Modal>)
};

export default Registration;