import { lazy } from "react";
// import WhatWeDo from "../../components/WhatWeDo";
import ResponsiveGrid from "../../common/ResponsiveGrid";
import ContactContent from "../../content/ContactContent.json";
import WorkshopAndEvents from "../../content/WorkshopAndEvents.json";
import IntroContentWhatWeDo from "../../content/IntroContentWhatWeDo.json";
import ESD from "../../content/ESD.json";
import EndContent from "../../content/EndContentWhatWeDo.json"

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const WhatWeDoContainer = () => {
  return (
    <Container>
      <ScrollToTop />
      <ResponsiveGrid />
      <ContentBlock
        direction="right"
        title={IntroContentWhatWeDo.title}
        content={IntroContentWhatWeDo.text}
        icon="our-work.jpg"
        id="intro"
      />
      <ContentBlock
        direction="left"
        content={ESD.text}
        icon="our-work1.jpg"
        id="intro"
      />
      <ContentBlock
        direction="right"
        content={EndContent.text}
        icon="our-work2.jpg"
        id="intro"
      />
      <MiddleBlock
        title={WorkshopAndEvents.title}
        paragraphs={WorkshopAndEvents.paragraphs}
        route="/camp"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default WhatWeDoContainer;
