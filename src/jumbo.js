import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Example from './example';

const Padder=styled.div`
padding-bottom:15px;
`

const Centerer = styled.div`
text-align: center;
`

export default function() {
    return (
        <Jumbotron fluid>
          <Container>
            <p>Upload your data in CSV file format.</p>
            <p>Our servers will process it, and create a GraphQL server you can use on the spot.</p>
            <p>Go ahead and use it to build your app around, or explore your data.
            </p>
        <Centerer>
                    </Centerer>
            <Padder><Link to="/show"><Button size="sm" color="primary">See your data's structure</Button></Link></Padder>
            <Padder><Link to="/cards"><Button size="sm" color="info">See your data as cards</Button></Link></Padder>
        <Example/>
            </Container>
        </Jumbotron>
    )
}
