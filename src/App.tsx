import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ActionPanel from "@/shared/actionPanel";
// import Phonograph from "@/shared/phonograph";
import StartMenu from "@/shared/menus/startMenu";
import PauseMenu from "@/shared/menus/pauseMenu";
import About from "@/shared/menus/about";
import Intro from "@/scenes/0_intro";
import CustomerIsAlwaysRight from "@/scenes/3_customerIsAlwaysRight";
import routes from "./routes";

import OptionsMenu from "@/shared/menus/optionsMenu";
import BakeryAudition from "@/scenes/1_bakeryAudition";
import FirstBigOrder from "@/scenes/2_firstBigOrder";
import DreamALittleDream from "@/scenes/4_dreamALittleDream";
import CastleInTheAir from "@/scenes/5_castleIntheAir";
import ShowMustGoOn from "@/scenes/6_showMustGoOn";
import DevilInTheDetails from "@/scenes/7_devilInTheDetails";

import "./App.scss";
import FilmGrain from "./shared/filmGrain";

function App() {
  const [displayPauseMenu, setDisplayPauseMenu] = useState(false);
  const [displayOptionsMenu, setDisplayOptionsMenu] = useState(false);

  return (
    <div className="app">
      <FilmGrain />
      <main className="main">
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
            path={routes.CUSTOMER_IS_ALWAYS_RIGHT}
            element={<CustomerIsAlwaysRight />}
          />
          <Route
            path={routes.DREAM_A_LITTLE_DREAM}
            element={<DreamALittleDream />}
          />
          <Route path={routes.CASTLE_IN_THE_AIR} element={<CastleInTheAir />} />
          <Route path={routes.THE_SHOW_MUST_GO_ON} element={<ShowMustGoOn />} />
          <Route
            path={routes.DEVIL_IN_THE_DETAILS}
            element={<DevilInTheDetails />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
