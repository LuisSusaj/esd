import { Row, Col, Card } from 'antd';
import React from 'react';

const VideoSkeleton = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Row align="top">
        {[...Array(16)].map((_, colIndex) => (
          <Col key={colIndex} xs={24} sm={12} md={8} lg={6}>
            <Card.Grid
              style={{
                width: '100%',
                padding: 5,
                height: '320px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '250px',
                  height: '320px',
                  background: 'rgba(0, 0, 0, 0.2)',
                }}
              ></div>
            </Card.Grid>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VideoSkeleton;
