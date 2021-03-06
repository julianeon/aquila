import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Mark=styled.div`
background-color:red;
-webkit-box-shadow: 0px 0px 10px 4px rgba(148,148,148,1),-4px -6px 15px 4px rgba(119,119,119,1),5px 6px 15px 3px rgba(165,165,165,1);
-moz-box-shadow: 0px 0px 10px 3px rgba(148,148,148,1),-4px -6px 15px 4px rgba(119,119,119,1),5px 6px 15px 3px rgba(165,165,165,1);
box-shadow: 0px 0px 10px 4px rgba(148,148,148,1),-4px -6px 15px 4px rgba(119,119,119,1),5px 6px 15px 3px rgba(165,165,165,1);
margin: 0px;
text-align: center;

`

const Hi=styled.h2`
	color: #fff;
	text-shadow: 0px -1px 4px white, 0px -2px 10px yellow, 0px -10px 20px #ff8000, 0px -18px 40px red;
	font: 80px 'BlackJackRegular';
`

const Imgur = styled.img`
border-radius: 12%;
padding: 15px;
`

const Ha=styled.h4`
color: #ffff4;
margin-down: 10px;
`

const Dark=styled.div`
background: linear-gradient(red, pink);
text-align: center;
padding: 20px;
`

export default function() {
    return ( <Dark>
             	  <Link to="/"><Imgur src="logo.png" alt="logo"/></Link>
            <Hi>The data is yours now.</Hi>
          </Dark>
    )
}
