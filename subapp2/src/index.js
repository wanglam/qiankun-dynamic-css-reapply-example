import "./public-path.js";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export async function bootstrap() {
  console.log("subapp2 app bootstraped");
}

export async function mount(props) {
  ReactDOM.render(
    <App />,
    props.container
      ? props.container.querySelector("#root")
      : document.getElementById("root")
  );
}

export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(
    props.container
      ? props.container.querySelector("#root")
      : document.getElementById("root")
  );
}
