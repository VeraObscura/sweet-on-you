import { Routes, Route } from "react-router-dom";

import ActionPanel from "shared/actionPanel";
//import Phonograph from "shared/phonograph";
import StartMenu from "shared/menus/startMenu";
import PauseMenu from "shared/menus/pauseMenu";
import About from "shared/menus/about";
import Intro from "scenes/0_intro";
import CherryAlmondCake from "scenes/3_cherryAlmondCake/cherryAlmondCake";
import routes from "./routes";

import "./app.scss";
import { useState } from "react";
import OptionsMenu from "shared/menus/optionsMenu";
import BakeryAudition from "scenes/1_bakeryAudition";
import FirstBigOrder from "scenes/2_firstBigOrder";
import FallingInLove from "scenes/4_fallingInLove";

function App() {
  const [displayPauseMenu, setDisplayPauseMenu] = useState(false);
  const [displayOptionsMenu, setDisplayOptionsMenu] = useState(false);

  return (
    <div className="app">
      <ActionPanel
        onEsc={() => {
          setDisplayPauseMenu(true);
          setDisplayOptionsMenu(false);
        }}
      />
      {displayPauseMenu && (
        <PauseMenu
          onSelectResume={() => {
            setDisplayPauseMenu(false);
            setDisplayOptionsMenu(false);
          }}
          onSelectOptions={() => {
            setDisplayOptionsMenu(true);
          }}
        />
      )}
      {displayOptionsMenu && (
        <OptionsMenu
          onReturn={() => {
            setDisplayOptionsMenu(false);
          }}
        />
      )}
      {/* <Phonograph /> */}
      <Routes>
        <Route
          path={routes.HOME}
          element={
            <StartMenu
              onSelectOptions={() => {
                setDisplayPauseMenu(false);
                setDisplayOptionsMenu(true);
              }}
            />
          }
        />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.INTRO} element={<Intro />} />
        <Route path={routes.BAKERY_AUDITION} element={<BakeryAudition />} />
        <Route path={routes.FIRST_BIG_ORDER} element={<FirstBigOrder />} />
        <Route
          path={routes.CHERRY_ALMOND_CAKE}
          element={<CherryAlmondCake />}
        />
        <Route path={routes.FALLING_IN_LOVE} element={<FallingInLove />} />
      </Routes>
    </div>
  );
}

export default App;
