import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

import App from "./App";

import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
