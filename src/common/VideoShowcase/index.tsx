import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";

export interface VideoPoster {
  link: string;
  src: string;
  poster?: string;
}

export interface Videos {
  videos: VideoPoster[];
}

const VideoShowcase = ({ videos }: Videos) => {
  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[0, 0]} align="top">
        {videos.map((video, colIndex) => (
          <Col key={colIndex} xs={24} sm={12} md={8} lg={6}>
            <Card.Grid
              style={{
                width: "100%",
                padding: 5,
                height: "320px",
                overflow: "hidden",
                display:"flex"
              }}
            >
              {video.poster ? (
                <video
                  src={video.src}
                  controls
                  poster={video.poster}
                  style={{ width: "100%", objectFit: "cover" }}
                ></video>
              ) : (
                <img
                  src={video.src}
                  alt="Instagram video showcase"
                  style={{ width: "100%", objectFit: "cover" }}
                />
              )}
            </Card.Grid>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VideoShowcase;
