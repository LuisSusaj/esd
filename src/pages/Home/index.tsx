import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import WhereTaughtContent from "../../content/WhereWeTaught.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const WhereWeTaught = lazy(() => import("../../components/WhereWeTaught"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        slide={true}
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="hero.jpg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        route="/about"
        video={true}
      />
      <WhereWeTaught
        title={WhereTaughtContent.title}
        content={WhereTaughtContent.text}
        route="/about"
      />
      {/* <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="why-us.jpg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="us.jpg"
        id="mission"
      /> */}
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        message={ProductContent.message}
        founder={ProductContent.founder}
        icon="founder.jpeg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
