import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ChatBot from "react-simple-chatbot";
import {SimpleForm} from "./components/SimpleForm";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Home />
      {/* <SimpleForm floating={true} /> */}
    </div>
  );
}

export default App;
