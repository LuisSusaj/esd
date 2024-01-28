import { Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { ContentBlockUpAndDownProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import { Image } from "../../common/Image";
import {
  ContentSection,
  Content,
  ContentWrapper,
  StyledRow,
  ButtonWrapper,
} from "./styles";
import handleClick from "../../common/utils/handleClick";

const ContentBlockUpAndDown = ({
  icon,
  title,
  content,
  button,
  t,
  id,
  direction,
  message,
  founder,
}: ContentBlockUpAndDownProps) => {
  const isNotSvg = !icon.includes("svg");
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const history = useHistory();

  const handleOnClick = (item: { color?: string; title: string }) => {
    if (item.title === "An Invitation") {
      scrollTo("product");
    } else if (item.title === "Join Our Camp") {
      window.open("https://forms.gle/MKDYTvKCW9xrvyvo6");
    } else {
      scrollTo("about");
    }
  };

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
            {isNotSvg ? (
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
                          onClick={() => handleOnClick(item)}
                        >
                          {t(item.title)}
                        </Button>
                      );
                    }
                  )}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlockUpAndDown);
