import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";
import "./styles.css";  // IMPORT corretto, CSS dentro src

ReactDOM.render(<App />, document.getElementById("root"));
