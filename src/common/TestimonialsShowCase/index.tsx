import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";

const TestimonialsShowCase = () => {
  const [data, setData] = useState([]);

  async function fetchTestimonials() {
    try {
      const response = await fetch("data.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[0, 0]} align="top">
        {data?.map((src: string) => (
          <Col key={src} xs={24} sm={12} md={8} lg={6}>
            <Card.Grid
              style={{
                width: "100%",
                padding: 5,
                height: "320px",
                overflow: "hidden",
                display: "flex",
              }}
            >
              <img
                src={`/img/${src}`}
                alt="Instagram video showcase"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Card.Grid>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TestimonialsShowCase;
