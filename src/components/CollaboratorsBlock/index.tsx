import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { CollaboratorsBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import { Image } from "../../common/Image";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  StyledRow,
} from "./styles";
import handleClick from "../../common/utils/handleClick";
import { useHistory } from "react-router-dom";

const ContentBlock = ({
  title,
  content,
  section = [
    {
      title: "",
      icon: "",
    },
  ],
  t,
  id,
  direction,
}: CollaboratorsBlockProps) => {
  const history = useHistory();
  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="center"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper style={{ textAlign: "center" }}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>

              <ServiceWrapper style={{ marginBottom: "20px" }}>
                <Row justify="space-between">
                  {section.map(
                    (
                      item: {
                        title: string;
                        icon: string;
                      },
                      id: number
                    ) => {
                      const isNotSvg = !item.icon.includes(".svg");
                      return (
                        <Col key={id} span={11} style={{ textAlign: "center" }}>
                          {isNotSvg ? (
                            <Image src={item.icon} width="" height="50px" />
                          ) : (
                            <SvgIcon
                              src={item.icon}
                              width="150px"
                              height="auto"
                            />
                          )}
                          <MinTitle>{t(item.title)}</MinTitle>
                        </Col>
                      );
                    }
                  )}
                </Row>
              </ServiceWrapper>
              <Button onClick={() => handleClick(history, "/donations")}>
                Become A donator
              </Button>
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
