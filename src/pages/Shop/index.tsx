import React from "react";
import { Typography } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./shop.css";
import { Button } from "../../common/Button";
import { useHistory } from "react-router-dom";
import handleClick from "../../common/utils/handleClick";

const { Title, Paragraph } = Typography;

const Shop: React.FC = () => {
  const history = useHistory();

  return (
    <div className="shop">
      <div className="content">
        <SmileOutlined
          style={{ fontSize: "64px", color: "rgb(0, 165, 171)" }}
        />
        <Title level={2}>Coming Soon</Title>
        <Paragraph>
          We're working hard to bring you an amazing experience. Stay tuned for
          updates!
        </Paragraph>
        <Button onClick={() => handleClick(history, "/")}>
          Go Back To Home Page
        </Button>
      </div>
    </div>
  );
};

export default Shop;
