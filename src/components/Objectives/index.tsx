import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ObjectivesSection, ContentWrapper, MinTitle } from "./styles";

interface ObjectivesProps {
  title: string;
  t: TFunction;
  objectives: string[];
}

const Objectives = ({ title, t, objectives }: ObjectivesProps) => {
  return (
    <ObjectivesSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              {objectives.map((objective) => (
                <MinTitle>{objective}</MinTitle>
              ))}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </ObjectivesSection>
  );
};

export default withTranslation()(Objectives);
