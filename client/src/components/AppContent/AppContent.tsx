import { FC } from "react";
import { Layout } from "antd";

const { Content } = Layout;

const AppContent: FC = ({ children }) => {
  return (
    <Content
      style={{
        width: "80%",
        paddingTop: "50px",
      }}
    >
      {children}
    </Content>
  );
};

export default AppContent;
