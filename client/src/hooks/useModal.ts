import { useState } from "react";

/**
 const {
   showModal,
   handleOk,
   handleCancel,
   visible,
   setVisible,
   confirmLoading,
  } = useModal(); Скопировать в компонент
 */
export const useModal = () => {
  const [visible, setVisible] = useState<boolean>(false);
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

  return {
    showModal,
    handleOk,
    handleCancel,
    visible,
    setVisible,
    confirmLoading,
  };
};
