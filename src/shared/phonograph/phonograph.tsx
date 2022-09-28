import { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { useLocation } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import routes from "routes";
import audioFile1 from "assets/audio/Victor_Herbert_Orchestra_-_10_-_1910_-_Hungarian_Dance.mp3";
import audioFile2 from "assets/audio/Victor_Herbert_Orchestra_-_07_-_1909_-_Venetian_Love_Song.mp3";
import audioFile3 from "assets/audio/Victor_Herbert_Orchestra_-_12_-_1910_-_Old_Dutch.mp3";
// import audioFile4 from "assets/audio/Victor_Herbert_Orchestra_-_20_-_1911_-_Naughty_Marietta.mp3";
// import audioFile5 from "assets/audio/Victor_Herbert_Orchestra_-_21_-_1912_-_The_Ameer.mp3";
// import audioFile6 from "assets/audio/Victor_Herbert_Orchestra_-_22_-_1913_-_Chanson_Triste.mp3";

const Phonograph = () => {
  const location = useLocation();
  const [audioFile, setAudioFile] = useState(audioFile1);

  useEffect(() => {
    const audioFilesMap = [
      { route: routes.HOME, audio: audioFile1 },
      { route: routes.ABOUT, audio: audioFile1 },
      { route: routes.FIRST_BIG_ORDER, audio: audioFile2 },
      { route: routes.CUSTOMER_IS_ALWAYS_RIGHT, audio: audioFile3 },
    ];

    const file = audioFilesMap.find(
      (audioFile) => audioFile.route === location.pathname
    );
    if (file) {
      setAudioFile(file.audio);
    } else {
      setAudioFile(audioFile1);
    }
  }, [location.pathname]);

  const volume = useAppSelector((state: RootState) => state.options.volume);

  return (
    <ReactAudioPlayer
      src={audioFile}
      loop={true}
      autoPlay={true}
      controls={false}
      volume={volume}
    />
  );
};

export default Phonograph;
