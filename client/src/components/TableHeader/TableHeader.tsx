import { FC, useState } from "react";
import { Button, Col, Modal, Row, Typography } from "antd";
import { IPropsTableHeader } from "../../interfaces/componentsInterface";

const { Title } = Typography;
// Комопнент который использует TableHeader должен обьявить переменную состояния visible и
// передавать в TableHeader два параметра setVisible, visible
// TableHeader принимает в виде children компонент с формой
// Комопнент который использует TableHeader должен передвать в компонент с формой два параметра setVisible, visible

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
