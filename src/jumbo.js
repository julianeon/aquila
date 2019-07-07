import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import styled from 'styled-components';

const Padder=styled.div`
padding:10px;
margin: 10px;
`

export default function() {
    return (
        <Jumbotron fluid>
          <Container>
            <h1>Upload your data. See it live.</h1>
            <p>As soon as you upload your data in CSV file format, our servers will process it and then show you what your data looks like.
            </p>

          <Button size="sm" color="primary">Visualize your data</Button>
          </Container>
        </Jumbotron>
    )
}
