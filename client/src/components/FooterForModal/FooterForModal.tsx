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
                <Button onClick={() => setVisible(false)}>
                    {firstButtonName}
                </Button>
                <Button htmlType="submit" type="primary">
                    {secondButtonName}
                </Button>
            </Space>
        </Form.Item>
    );
};

export default FooterForModal;