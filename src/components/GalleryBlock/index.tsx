import { useState, useEffect } from "react";
import VideoShowcase from "../../common/VideoShowcase";
import useFetch from "../../common/utils/useFetch";
import network from "../../network";
import { Instagram } from "../../network/endpoints";
import fetchData from "../../common/utils/fetchData";
import formatVideoData from "../../common/utils/formatVideoData";
import VideoSkeleton from "../../common/VideoSkeleton";
import { Fade } from "react-awesome-reveal";
import { StyledRow } from "../ContentBlock/styles";

const GalleyBlock = () => {
  const { url, token, file, videos }: Instagram = network.instagram;
  const tokenUrl = `${url}${token}${file}`;
  const { response, error } = useFetch({
    url: tokenUrl,
  });
  const { accessToken }: any = response || "";
  const [videoResponse, setVideoResponse] = useState(null);
  const [videoError, setVideoError] = useState(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const [formatedData, setFormatedData] = useState<any>([]);
  const maxVideoShowcase = 16;
  useEffect(() => {
    accessToken &&
      fetchData({
        url: videos,
        method: "get",
        params: {
          fields: "permalink,media_url,thumbnail_url",
          access_token: accessToken,
        },
        setResponse: setVideoResponse,
        setIsLoading: setVideoLoading,
        setError: setVideoError,
        isLoading: videoLoading,
      });
  }, [accessToken]);

  useEffect(() => {
    const formatedData = formatVideoData({
      data: videoResponse,
      maxVideoShowcase: maxVideoShowcase,
    });
    setFormatedData(formatedData);
  }, [videoResponse]);
  return (
    <>
      <Fade direction={"left"} triggerOnce>
        <StyledRow justify="center" align="middle" direction={"left"}>
          <h6 style={{ marginTop: 30 }}>Gallery</h6>
          <p>
            Browse through a collection of empowering images showcasing
            participants, events, and the positive atmosphere of our program.
          </p>
        </StyledRow>
      </Fade>
      <Fade direction={"up"} triggerOnce>
        <StyledRow justify="space-between" align="middle" direction={"up"}>
          {error
            ? "Access Token Error"
            : videoError
            ? "Error Getting Gallery Images"
            : ""}
          {videoLoading && <VideoSkeleton />}
          {formatedData && formatedData.length && (
            <VideoShowcase videos={formatedData}></VideoShowcase>
          )}
        </StyledRow>
      </Fade>
    </>
  );
};
export default GalleyBlock;
