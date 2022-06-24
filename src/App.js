import React from "react";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./Global/GlobalStyle";
import Header from "./components/Header";
import Router from "./Routes/router";
import Canvas from "./Global/Canvas";
function App() {
  return (
    <GlobalStyle>
      <Canvas>
        <ToastContainer />
        <Header />
        <div className="main">
          <div className="container">
            <Router />
          </div>
        </div>
      </Canvas>
    </GlobalStyle>
  );
}

export default App;
