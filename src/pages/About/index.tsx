import { lazy } from "react";
import AboutPageIntro from "../../content/AboutPageIntro.json";
import AboutPageBlock from "../../content/AboutPageBlock.json";
import GalleryBlock from "../../components/GalleryBlock";
import TestimonialsBlock from "../../components/TestimonialsBlock";
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
      <CollaboratorsBlock
        direction="left"
        title={AboutPageBlock.title}
        content={AboutPageBlock.text}
        section={AboutPageBlock.section}
        id="no-right"
      />
      {/* <GalleryBlock />
      <TestimonialsBlock /> */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
