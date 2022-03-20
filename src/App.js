import React from "react";
import "./App.css";
// import { parse } from "papaparse";

function App() {
  return (
    <div className="box">
      <h1>Contact Import</h1>
      <div
        className="drop-box"
        onDragOver={(event) => {
          event.preventDefault();
        }}
        onDrop={(event) => {
          event.preventDefault();
          console.log(event.dataTransfer.files)
          Array.from(event.dataTransfer.files)
            .filter(file => file.type === "text/csv")
            .forEach((file) => {
              console.log(file)
            })
        }}
      >DROP HERE</div>
    </div>
  );
}

export default App;
