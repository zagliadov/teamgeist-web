import { FC, useState } from 'react';
import { Modal, Tabs } from 'antd';
// import { useNavigate } from 'react-router-dom';
import CompanyRegistration from './CompanyReg';
import UserRegistration from './UserReg';
// import {IUserRegisterForm, ICompanyRegisterForm } from '../../interfaces/componentsInterface';



const Registration: FC = () => {

    const [isModalVisible, setIsModalVisible] = useState(true);
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const { TabPane } = Tabs;

    function callback(key: string) {
        console.log(key);
    }

    const receivedValuesOfForm = (values: {}) => {
        console.log('Received values of form: ', values);
      };


    //receivedValuesOfForm={receivedValuesOfForm}
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
                <TabPane tab="План для компании" key="Company">
                    <CompanyRegistration />
                </TabPane>

                <TabPane tab="Индивидуальный план" key="individualUser">
                    <UserRegistration />
                </TabPane>
            </Tabs>
        </Modal>)
};

export default Registration;