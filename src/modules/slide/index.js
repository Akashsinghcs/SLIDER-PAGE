import useSound from "use-sound";
import "./slide.css";
import YouTube from "react-youtube";
import catSound from "./sounds/cat.mp3";
import React from "react";

export default function Slide(props) {
  const [playingVideo, setPlayingVideo] = React.useState(false);
  const [playSound] = useSound(catSound);

  const onPlayerReady = event => {
    event.target.pauseVideo();
  };

  const opts = {
    height: "auto",
    width: "auto",
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <div className="slideContainer">
      <img
        className="animalImage"
        src={props.animal.imageurl}
        alt={props.animal.name}
      />
      <div className="animalName" style={{ zIndex: 10 }}>
        {props.animal.name}
      </div>
      <div className="actions">
        <button onClick={playSound}>sound</button>
        <button onClick={() => setPlayingVideo(value => !value)}>video</button>
      </div>
      <p className="animalDescription" style={{ zIndex: 10 }}>
        {props.animal.description}
      </p>
      {playingVideo && (
        <div className="videoContainer">
          <YouTube
            videoId={props.animal.videoid}
            opts={opts}
            onReady={onPlayerReady}
          />
        </div>
      )}
    </div>
  );
}
