import React from "react";
import Upload from "./upload/Upload";
import Banner from "./banner";
import Jumbo from "./jumbo";
import styled from 'styled-components';
import "./App.css";

const App = () => {
      return (
          <div>

            <Banner/>
          <Jumbo/>                        
            <div className="App">
              <div className="Card">
                <Upload />
              </div>
            </div>
          </div>
    );
}

export default App;
