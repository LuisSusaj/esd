import { lazy } from "react";
import SummerCampIntro from "../../content/SummerCampIntro.json";
import CampSchedule from "../../content/CampSchedule.json";
import Themes from "../../content/Themes.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ContentBlockUpAndDown = lazy(
  () => import("../../components/ContentBlockUpAndDown")
);
const ObjectivesBlock = lazy(() => import("../../components/Objectives"));
const CostBlock = lazy(() => import("../../components/Cost"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlockUpAndDown
        direction="down"
        title={SummerCampIntro.title}
        content={SummerCampIntro.text}
        button={SummerCampIntro.button}
        icon="summer-camp.jpg"
        id="intro"
      />
      <ContentBlock
        direction="left"
        title={CampSchedule.title}
        content={CampSchedule.text}
        section={CampSchedule.section}
        icon="schedule.jpg"
        id="about"
      />
      <ObjectivesBlock title={Themes.title} objectives={Themes.objectives} />
      <CostBlock
        title="The Total Cost Of Our Camp"
        content="Once you have expressed your interest, an info note will follow for you to continue the registration."
        button="Join Us"
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
