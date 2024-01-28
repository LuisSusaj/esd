import { lazy } from "react";
import MissionIntro from "../../content/MissionIntro.json";
import ObjectivesContet from "../../content/ObjectivesContent.json";
import OurTraining from "../../content/OurTraining.json";
import OurAim from "../../content/OurAim.json";
import OurAchivments from "../../content/OurAchivments.json";
import SlidingImages from "../../components/SlidingImages";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ContentBlockUpAndDown = lazy(
  () => import("../../components/ContentBlockUpAndDown")
);
const ObjectivesBlock = lazy(() => import("../../components/Objectives"));

const Mission = () => {
  return (
    <Container>
      <ScrollToTop />
      <SlidingImages />
      <ContentBlockUpAndDown
        direction="up"
        title={MissionIntro.title}
        content={MissionIntro.text}
        button={MissionIntro.button}
        icon="mission.jpg"
        id="intro"
      />
      <ObjectivesBlock
        title={ObjectivesContet.title}
        objectives={ObjectivesContet.objectives}
      />
      <ContentBlock
        direction="left"
        title={OurTraining.title}
        content={OurTraining.text}
        icon="training.jpg"
        id="our-training"
      />
      <ContentBlock
        direction="right"
        title={OurAim.title}
        content={OurAim.text}
        icon="our-aim.jpg"
        id="our-aim"
      />
      <ContentBlock
        direction="right"
        title={OurAchivments.title}
        content={OurAchivments.text}
        icon="learn.jpg"
        id="our-achivments"
      />
    </Container>
  );
};

export default Mission;
