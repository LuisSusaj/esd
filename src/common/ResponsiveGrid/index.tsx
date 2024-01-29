import React from "react";
import "./Grid.css";
import { Button } from "../../common/Button";

interface GridItemProps {
  image: string;
  text: string;
}

const GridItem: React.FC<GridItemProps> = ({ image, text }) => (
  <div className="grid-item" style={{ backgroundImage: `url(${image})` }}>
    <div className="overlay">
      <p className="text">{text}</p>
      <Button>Book Now!</Button>
    </div>
  </div>
);

const ResponsiveGrid: React.FC = () => {
  const gridItems: GridItemProps[] = [
    {
      image: "/img/1.jpg",
      text: "Schools and Universities",
    },
    {
      image: "/img/2.jpg",
      text: "Training of Trainers ",
    },
    {
      image: "/img/3.jpg",
      text: "Empowering Campaigns ",
    },
    {
      image: "/img/4.jpg",
      text: "Corporate Events ",
    },
    {
      image: "/img/5.png",
      text: "Online learning",
    },
    {
      image: "/img/6.png",
      text: "Mindful Motion",
    },
  ];

  return (
    <div className="whatWeDo">
      <h6>What we do</h6>
      <div className="grid-container">
        {gridItems.map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveGrid;
