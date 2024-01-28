import React from "react";
import { Carousel } from "antd";
import { Image } from "../../common/Image";

const SlidingImages: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <Carousel autoplay>
        <div>
          <Image src="hero.jpg" width="100%" height="auto" />
        </div>
        <div>
          <Image src="about-us.jpg" width="100%" height="auto" />
        </div>
        <div>
          <Image src="summer-camp.jpg" width="100%" height="auto" />
        </div>
      </Carousel>
    </div>
  );
};

export default SlidingImages;
