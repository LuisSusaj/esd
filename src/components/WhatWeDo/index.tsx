import { Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { ContentSection, Content, ContentWrapper, StyledRow } from "./styles";
import WhatWeDo from "../../content/WhatWeDo.json";

const ContentBlock = () => {
  return (
    <>
      {WhatWeDo &&
        WhatWeDo.map((ele: { src: string; title: string; desc: string }, i) => {
          const isEven = i % 2 === 0;
          const direction = isEven ? "right" : "left";
          return (
            <ContentSection key={ele.desc}>
              <Fade direction={direction} triggerOnce>
                <StyledRow
                  justify="space-between"
                  align="middle"
                  id={""}
                  direction={direction}
                >
                  <Col lg={11} md={11} sm={12} xs={24}>
                    <img
                      src={ele.src}
                      alt={ele.src}
                      width="100%"
                      height={"100%"}
                      style={{ borderRadius: "6px" }}
                    />
                  </Col>
                  <Col lg={11} md={11} sm={11} xs={24}>
                    <ContentWrapper>
                      <h6>{ele.title}</h6>
                      <Content>{ele.desc}</Content>
                    </ContentWrapper>
                  </Col>
                </StyledRow>
              </Fade>
            </ContentSection>
          );
        })}
    </>
  );
};

export default withTranslation()(ContentBlock);
