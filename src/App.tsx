import { Routes, Route } from "react-router-dom";

import ActionPanel from "shared/actionPanel";
//import Phonograph from "shared/phonograph";
import StartMenu from "components/menus/startMenu";
import PauseMenu from "components/menus/pauseMenu";
import About from "components/menus/about";
import CherryHeartCake from "scenes/3_cherryHeartCake";
import CrumbCoatScene from "scenes/3_cherryHeartCake/components/crumbCoatScene";
import CakeScene from "scenes/3_cherryHeartCake/components/cakeScene";
import routes from "./routes";

import "./app.scss";
import { useState } from "react";
import OptionsMenu from "components/menus/optionsMenu";

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
        <Route path={routes.CHERRY_HEART_CAKE}>
          <Route path="" element={<CherryHeartCake />} />
          <Route path={routes.CRUMB_COAT} element={<CrumbCoatScene />} />
          <Route path={routes.CAKE_SCENE} element={<CakeScene />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
