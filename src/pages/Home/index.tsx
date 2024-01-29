import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import WhereTaughtContent from "../../content/WhereWeTaught.json";
import WorkshopAndEvents from "../../content/WorkshopAndEvents.json";

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
      <MiddleBlock
        title={WorkshopAndEvents.title}
        paragraphs={WorkshopAndEvents.paragraphs}
        route="/camp"
      />
      <WhereWeTaught
        title={WhereTaughtContent.title}
        left={WhereTaughtContent.left}
        right={WhereTaughtContent.right}
        route="/about"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        message={ProductContent.message}
        founder={ProductContent.founder}
        icon="book.jpg"
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
