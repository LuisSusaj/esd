import React, { lazy } from "react";
import FaqCollapsible from "../../components/FaqSection";
import FaqInfo from "../../content/Faq.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));

const FaqPage: React.FC = () => {
  return (
    <Container>
      <h1>Frequently Asked Questions</h1>
      <FaqCollapsible faqs={FaqInfo} />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default FaqPage;
