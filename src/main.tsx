import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "../src/assets/scss/index.scss";
import { Provider } from "react-redux";
import { store } from "./components/store/store.ts";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
