import React from "react";
import Upload from "./upload/Upload";
import Jumbo from "./jumbo";
import Banner from "./banner";
import styled from 'styled-components';
import "./App.css";

const App = () => {
      return (
          <div>
          <Banner/>
          <Jumbo/>                        
         <Upload />
         </div>
    );
}

export default App;
