import styles from "./VideoPlayer.module.css";
import video from "../../assets/college-students.mp4";
import { useRef } from "react";

const VideoPlayer = ({ play, setplay }) => {
  const player = useRef(null);

  const closePlayer = (event) => {
    if (event.target === player.current) {
      setplay(false);
    }
  };
  return (
    <div
      className={`${styles.videoPlayer} ${play ? "" : styles.hide}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
