import { useState } from "react";
import { SkeletonBox } from "../SkeletonBox";
import IVideoProps from "./interface/IVideoProps";
import { Container, PlayButton, Thumbnail } from "./styles";

export default function Video(props: IVideoProps) {
  const { videoId: videoUrl, skeleton, ...containerProps } = props;
  const [playing, setPlaying] = useState(false);

  const videoIdMatch = videoUrl.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/);
  const videoId = videoIdMatch ? videoIdMatch[1] : videoUrl;

  if (skeleton) {
    return <SkeletonBox borderRadius={16} {...props} />;
  }

  return (
    <Container {...containerProps}>
      {playing ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <Thumbnail
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Trailer"
          />
          <PlayButton onClick={() => setPlaying(true)} />
        </>
      )}
    </Container>
  );
}
