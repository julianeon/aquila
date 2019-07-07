import React from "react";
import { Route, HashRouter as Router } from 'react-router-dom';
import Upload from "./upload/Upload";
import Home from "./home";
import Show from "./show";
import Cards from "./cards";
import Layout from "./layout";
import "./App.css";

const App = () => {
    return (
	  <div>
	  <Router>
	  <Layout>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/show" component={Show} />
 	    <Route path="/cards" component={Cards} />            
	  </div>
	  </Layout>
	  </Router>
         </div>
    );
}

export default App;
