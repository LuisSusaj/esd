import { lazy } from "react";
import WhatWeDo from "../../components/WhatWeDo";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const WhatWeDoContainer = () => {
  return (
    <Container>
      <ScrollToTop />
      <WhatWeDo />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default WhatWeDoContainer;
