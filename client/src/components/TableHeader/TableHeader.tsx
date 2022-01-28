import { FC, useState } from "react";
import { Button, Col, Modal, Row, Typography } from "antd";
import { IPropsTableHeader } from "../../interfaces/componentsInterface";
const { Title } = Typography;

/**
 * @param children - Форма для модального окна
 * @param title - Текст для Title.
 * @param whatDoesTheButtonDo - Текст для Button.
 * @param modalTitle - Текст для Title модального окна. 
 * @param footer - true/false Отображать или нет footer у модального окна. 
 * @param maskClosable - true/false Закрыть модального окно по клику на фон. 
 * @param setVisible - parent component должен иметь общий setVisible с TableHeader and children component.
 * @param visible - parent component должен иметь общий visible с TableHeader and children component.
 */
const TableHeader: FC<IPropsTableHeader> = ({
  children,
  title,
  whatDoesTheButtonDo,
  modalTitle,
  footer,
  maskClosable,
  setVisible,
  visible,
}) => {
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <Row>
      <Col span={12}>
        <Title level={3}>{title}</Title>
      </Col>
      <Col span={12} style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button type="primary" onClick={showModal}>
          {whatDoesTheButtonDo}
        </Button>
      </Col>
      <Modal
        title={modalTitle}
        visible={visible}
        onOk={handleOk}
        footer={footer}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        maskClosable={maskClosable}
      >
        {children}
      </Modal>
    </Row>
  );
};

export default TableHeader;
