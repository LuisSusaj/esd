import { lazy } from "react";
import VideoBlock from "../../components/VideoBlock";

const Container = lazy(() => import("../../common/Container"));

const Gallery = () => {
  return (
    <Container>
      <VideoBlock />
    </Container>
  );
};
export default Gallery;
