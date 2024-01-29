import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { WhereWeTaughtSection, Content, ContentWrapper, Link} from "./styles";

type ParagraphGroup = {
  text: string;
  src?: string;
};

interface WhereWeTaughtProps {
  title: string;
  left: ParagraphGroup[];
  right: ParagraphGroup[];
  t: TFunction;
  route: string;
}

const WhereWeTaught = ({ title, left, right, t }: WhereWeTaughtProps) => {
  return (
    <WhereWeTaughtSection id="whereWeTaught">
      <Slide direction="left" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{title}</h6>
              <Row>
                <ContentWrapper>
                  {left.map((ele, i) => {
                    if(ele.src){
                      return (
                        <Link key={ele.text} href={ele.src} target="_blank">
                          {i + 1}.{t(ele.text)}
                        </Link>
                      );
                    }else{
                      return (
                        <Content key={ele.text}>
                          {i + 1}.{t(ele.text)}
                        </Content>
                      );
                    }
                  })}
                </ContentWrapper>
                <ContentWrapper style={{ alignItems: "flex-end" }}>
                  {right.map((ele, i) => {
                    if(ele.src){
                      return (
                        <Link key={ele.text} href={ele.src} target="_blank">
                          {i + 14}.{t(ele.text)}
                        </Link>
                      );
                    }else{
                      return (
                        <Content key={ele.text}>
                          {i + 14}.{t(ele.text)}
                        </Content>
                      );
                    }
                  })}
                </ContentWrapper>
              </Row>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </WhereWeTaughtSection>
  );
};

export default withTranslation()(WhereWeTaught);
