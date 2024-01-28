import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { CostSection, Content, ContentWrapper } from "./styles";
import { Image } from "../../common/Image";

interface CostProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
}

const Cost = ({ title, content, button, t }: CostProps) => {
  const handleClick = (url: string) => window.open(url);

  return (
    <CostSection>
      <Slide direction="right" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Image src="cost.webp" width="100%" height="" />
              <Content>{t(content)}</Content>

              {button && (
                <Button
                  name="button"
                  onClick={() =>
                    handleClick("https://forms.gle/MKDYTvKCW9xrvyvo6")
                  }
                >
                  {t(button)}
                </Button>
              )}
              <Button
                name="submit"
                onClick={() =>
                  handleClick("https://forms.gle/MKDYTvKCW9xrvyvo6")
                }
              >
                {t("Pay Now")}
              </Button>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </CostSection>
  );
};

export default withTranslation()(Cost);
