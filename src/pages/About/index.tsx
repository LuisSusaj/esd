import { lazy } from "react";
import AboutPageIntro from "../../content/AboutPageIntro.json";
import AboutPageBlock from "../../content/AboutPageBlock.json";
import OurFounder from "../../content/OurFounder.json";
import MorAboutFounder from "../../content/MoreAboutOurFounder.json";
import Uendi from "../../content/Uendi.json";
import Era from "../../content/Era.json";
// import GalleryBlock from "../../components/GalleryBlock";
// import TestimonialsBlock from "../../components/TestimonialsBlock";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const CollaboratorsBlock = lazy(
  () => import("../../components/CollaboratorsBlock")
);

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="left"
        title={AboutPageIntro.title}
        content={AboutPageIntro.text}
        button={AboutPageIntro.button}
        icon="about-us.jpg"
        id="intro"
      />
      <ContentBlock
        direction="right"
        title={OurFounder.title}
        content={OurFounder.text}
        icon="founder.jpg"
        id="intro"
      />
      <ContentBlock
        direction="left"
        content={MorAboutFounder.text}
        quote={MorAboutFounder.quote}
        icon="founder1.jpeg"
        id="intro"
      />
       <ContentBlock
        direction="right"
        title={Uendi.title}
        content={Uendi.text}
        icon="Uendi Hiso.jpg"
        id="intro"
      />
       <ContentBlock
        direction="left"
        title={Era.title}
        content={Era.text}
        icon="Era Gjoni.jpeg"
        id="intro"
      />
      {/* <GalleryBlock />
      <TestimonialsBlock /> */}
      <CollaboratorsBlock
        direction="up"
        title={AboutPageBlock.title}
        content={AboutPageBlock.text}
        section={AboutPageBlock.section}
        id="no-right"
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
