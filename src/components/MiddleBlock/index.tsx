import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { useHistory } from "react-router-dom";
import handleClick from "../../common/utils/handleClick";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
  route: string;
  video?: boolean;
}

const MiddleBlock = ({
  title,
  content,
  button,
  t,
  route,
  video,
}: MiddleBlockProps) => {
  const history = useHistory();

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{title}</h6>
              {video ? (
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/XSuTJaqXgXc?si=UQWX2MgSFIrRxkhs"
                  title="YouTube video player"
                  style={{
                    maxWidth: "100%",
                    border: "none",
                    borderRadius: "6px",
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              ) : (
                <Content>{t(content)}</Content>
              )}
              {button && (
                <Button
                  name="submit"
                  onClick={() => handleClick(history, route)}
                >
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
