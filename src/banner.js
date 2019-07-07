import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import styled from 'styled-components';

const Dark=styled.div`
color: black;
background-color: red;
padding: 20px;
margin: 0px;
text-align: center;
`

export default function() {
    return (
          <Dark>        
            <h1>Aquila</h1>
            <p>See what's happening with your data. Data made easy.</p>
          </Dark>
    )
}
