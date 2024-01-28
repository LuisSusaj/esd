import { Fade } from "react-awesome-reveal";
import { StyledRow } from "../ContentBlock/styles";
import TestimonialsShowCase from "../../common/TestimonialsShowCase";

const TestimonialsBlock = () => {
  return (
    <>
      <Fade direction="down" triggerOnce>
        <StyledRow justify="center" align="middle" direction={"left"}>
          <h6 style={{ marginTop: 30 }}>Testimonials</h6>
          <p>
            Explore the transformative impact of our programs through heartfelt
            testimonials, where individuals share their empowering journeys and
            experiences of building confidence and resilience with our women's
            self-defense initiatives.
          </p>
        </StyledRow>
      </Fade>
      <Fade direction={"right"} triggerOnce>
        <StyledRow justify="space-between" align="middle" direction={"up"}>
          <TestimonialsShowCase />
        </StyledRow>
      </Fade>
    </>
  );
};
export default TestimonialsBlock;
