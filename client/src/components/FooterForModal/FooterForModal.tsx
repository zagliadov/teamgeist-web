import { Button, Form, Space } from 'antd';
import { FC } from 'react';
import { IFooterForModal } from '../../interfaces/componentsInterface'



const FooterForModal: FC<IFooterForModal> = ({
    setVisible,
    firstButtonName,
    secondButtonName,
}) => {


    return (
        <Form.Item>
            <Space style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '10px',
            }}>
                <Button className={'white__btn'} onClick={() => setVisible(false)}>
                    {firstButtonName}
                </Button>
                <Button htmlType="submit" className="brand__btn">
                    {secondButtonName}
                </Button>
            </Space>
        </Form.Item>
    );
};

export default FooterForModal;