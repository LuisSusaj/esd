import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import { Image } from "../../common/Image";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";
import handleClick from "../../common/utils/handleClick";
import SlidingImages from "../SlidingImages";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
  message,
  founder,
  slide,
}: ContentBlockProps) => {
  const isNotSvg = !icon.includes("svg");
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const history = useHistory();

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            {slide ? (
              <SlidingImages />
            ) : isNotSvg ? (
              <Image src={icon} width="100%" height="100%" />
            ) : (
              <SvgIcon src={icon} width="100%" height="100%" />
            )}
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {message && (
                <>
                  <Content>{message}</Content>
                  <Content>{founder}</Content>
                  <Button onClick={() => handleClick(history, "/camp")}>
                    Join us!
                  </Button>
                </>
              )}
              {direction === "right" && id !== "no-right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() =>
                              scrollTo(
                                item.title === "An Invitation"
                                  ? "product"
                                  : "about"
                              )
                            }
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          const isNotSvg = !item.icon.includes(".svg");
                          return (
                            <Col key={id} span={11}>
                              {isNotSvg ? (
                                <Image src={item.icon} width="" height="60px" />
                              ) : (
                                <SvgIcon
                                  src={item.icon}
                                  width=""
                                  height="60px"
                                />
                              )}
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
