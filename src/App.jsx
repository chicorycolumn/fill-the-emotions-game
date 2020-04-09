import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div class="emotionHolder">
          <p id="happyDisplay" class="emotions">
            happy: 0.00
          </p>
          <p id="happyBars" class="emotions">
            □□□□
          </p>
          <br />
          <p id="sadDisplay" class="emotions">
            sad: 0.00
          </p>
          <p id="sadBars" class="emotions">
            □□□□
          </p>
          <br />
          <p id="angryDisplay" class="emotions">
            angry: 0.00
          </p>
          <p id="angryBars" class="emotions">
            □□□□
          </p>
          <br />
          <p id="surprisedDisplay" class="emotions">
            surprised: 0.00
          </p>
          <p id="surprisedBars" class="emotions">
            □□□□
          </p>
        </div>
        <div class="container">
          <div id="videoContainer">
            <video id="video" width="360" height="280" autoPlay muted></video>
            <canvas id="canvas3"></canvas>
          </div>
          <p>➡️➡️</p>
          <canvas id="canvas2"></canvas>

          <h1 id="youAre">You are...</h1>
        </div>
      </div>
    );
  }
}

export default App;
