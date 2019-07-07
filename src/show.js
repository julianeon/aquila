import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import React from 'react';
import styled from 'styled-components';

const TopName=styled.div`
color: white;
margin-left: 10px;
margin-top: 10px;
margin-bottom: 20px;
padding: 5px;
  background-image: linear-gradient(to right, black , #787878);
`

const Names=styled.div`
color: white;
margin-left: 20px;
margin-top: 10px;
  background-image: linear-gradient(to right, gray , #787878);
`


const many_things = [
  {
      'title': 'Title',
  },
  {
      'title': 'Owner',
  },
  {
      'title': 'Quantity',
  },
  {
      'title': 'Location',
  },
  {
      'title': 'Value',
  },
  {
      'title': 'Price',
  }
];

function SayQL(props) {
    var fakeql=[];
    props.text.map((item) => fakeql.push(<Names><p>{item.title}</p></Names>))
    return (
        <p>{fakeql}</p>
    )
};


export default function() {
    return (
        <>
          <p>Your schema is ready to use.</p>
          <TopName>Property</TopName>
          <SayQL text={many_things} />
          <TopName>Place</TopName>
          <SayQL text={many_things} />
        </>
    );
}



