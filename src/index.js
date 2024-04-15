import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      maxValue={5}
      messages={["Terrible 😢", "Bad 🙁", "Okay 🙂", "Good 😊", "Amazing 😍"]}
    />
    <App color={"red"} size={48} />
  </React.StrictMode>
);
