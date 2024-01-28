import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { WhereWeTaughtSection, Content, ContentWrapper } from "./styles";

interface WhereWeTaughtProps {
  title: string;
  content: string;
  t: TFunction;
  route: string;
}

const WhereWeTaught = ({ title, content, t }: WhereWeTaughtProps) => {
  return (
    <WhereWeTaughtSection>
      <Slide direction="left" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{title}</h6>
              <Row>
                <Content style={{ width: "calc(50% - 10px)", marginRight: 20 }}>
                  {t(content)}
                </Content>
                <Content style={{ width: "calc(50% - 10px)" }}>
                  {t(content)}
                </Content>
              </Row>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </WhereWeTaughtSection>
  );
};

export default withTranslation()(WhereWeTaught);
