import React from "react";
import { Card } from "antd";
import "./donations.css";
import { Button } from "../../common/Button";

const { Meta } = Card;

const DonationsContainer: React.FC = () => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <Card
        style={{ width: "45%", margin: "10px", textAlign: "center" }}
        cover={<img alt="Option 1" src="https://placekitten.com/800/600" />}
      >
        <Meta
          title="$5 Donation"
          description="Show your support with a $5 contribution. Every little bit helps!"
        />
        <Button>Donate $5</Button>
      </Card>

      <Card
        style={{ width: "45%", margin: "10px", textAlign: "center" }}
        cover={<img alt="Option 2" src="https://placekitten.com/800/601" />}
      >
        <Meta
          title="$10 Donation"
          description="Double the impact! Contribute $10 and make a significant difference."
        />
        <Button>Donate $10</Button>
      </Card>

      <Card
        style={{ width: "45%", margin: "10px", textAlign: "center" }}
        cover={<img alt="Option 3" src="https://placekitten.com/800/602" />}
      >
        <Meta
          title="$15 Donation"
          description="Supercharge your support with a $15 donation. Thank you for your generosity!"
        />
        <Button>Donate $15</Button>
      </Card>

      <Card
        style={{ width: "45%", margin: "10px", textAlign: "center" }}
        cover={<img alt="Option 4" src="https://placekitten.com/800/603" />}
      >
        <Meta
          title="Donate As Much As You Can"
          description="Your limitless generosity fuels our mission. Enter your desired amount and make an impact!"
        />
        <Button>Donate Now</Button>
      </Card>
    </div>
  );
};

export default DonationsContainer;
