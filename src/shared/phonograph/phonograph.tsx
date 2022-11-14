import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useLocation } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import routes from "@/routes";

import NaughtyMarietta from "@/assets/audio/Victor_Herbert_Orchestra_-_20_-_1911_-_Naughty_Marietta.mp3";
import AllByMyself from "@/assets/audio/Aileen_Stanley_-_All_by_Myself.mp4";
import TheCharleston from "@/assets/audio/Arthur_Gibbs_and_His_Gang_-_The_Charleston.mp4";
import AllAlone from "@/assets/audio/John_McCormack_-_All_Alone.mp4";
import CrazyBlues from "@/assets/audio/Mamie_Smith_-_Crazy_Blues.mp4";
import HungarianDance from "@/assets/audio/Victor_Herbert_Orchestra_-_10_-_1910_-_Hungarian_Dance.mp3";
import VenetianLove from "@/assets/audio/Victor_Herbert_Orchestra_-_07_-_1909_-_Venetian_Love_Song.mp3";
import ChansonTriste from "@/assets/audio/Victor_Herbert_Orchestra_-_22_-_1913_-_Chanson_Triste.mp3";
import ThreeOClockInTheMorning from "@/assets/audio/Paul_Whiteman_-_Three_O'Clock_In_The_Morning.mp4";
import OldDutch from "@/assets/audio/Victor_Herbert_Orchestra_-_12_-_1910_-_Old_Dutch.mp3";
import TheAmeer from "@/assets/audio/Victor_Herbert_Orchestra_-_21_-_1912_-_The_Ameer.mp3";

const Phonograph = () => {
  const location = useLocation();
  const [audioFile, setAudioFile] = useState(NaughtyMarietta);

  useEffect(() => {
    const audioFilesMap = [
      { route: routes.HOME, audio: NaughtyMarietta },
      { route: routes.ABOUT, audio: NaughtyMarietta },
      { route: routes.INTRO, audio: AllAlone },
      { route: routes.FIRST_BIG_ORDER, audio: HungarianDance },
      { route: routes.CUSTOMER_IS_ALWAYS_RIGHT, audio: TheCharleston },
      { route: routes.DREAM_A_LITTLE_DREAM, audio: ChansonTriste },
      { route: routes.CASTLE_IN_THE_AIR, audio: VenetianLove },
      { route: routes.THE_SHOW_MUST_GO_ON, audio: AllByMyself },
      { route: routes.DEVIL_IN_THE_DETAILS, audio: CrazyBlues },
    ];

    const file = audioFilesMap.find(
      (audioFile) => audioFile.route === location.pathname
    );
    if (file) {
      setAudioFile(file.audio);
    } else {
      setAudioFile(NaughtyMarietta);
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
