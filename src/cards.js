import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import React from 'react';
import styled from 'styled-components';

const Block=styled.div`
background-color: #b5d3e7;
padding: 3px;
`

const Card=styled.div`
padding:15px;
margin:15px 15px 15px 15px;
background-color: #ffffe0;
`

const many_things = [
  {
      'title': 'Bookcase',
      'owner': 'J.K. Rowling',
      'price': '$8500',
      'quantity': '5',
      'value': 'dark brown',
      'location': 'New York City, New York',
  },
  {
      'title': 'Laptop',
      'owner': 'Michael Crichton',
      'price': '$1500',
      'quantity': '3',
      'value': 'aluminum',
      'location': 'Boston, Massachusetts',
  },
  {
      'title': 'Sailboat',
      'owner': 'Lebron James',
      'price': '$65000',
      'quantity': '2',
      'value': 'blue and white',
      'location': 'Cleveland, Ohio',
  },
  {
      'title': 'Necklace',
      'owner': 'Olive Wilde',
      'price': '$100000',
      'quantity': '1',
      'value': 'diamond green',
      'location': 'Hollywood, California',
  },
  {
      'title': 'Helicopter',
      'owner': 'Jeff Bezos',
      'price': '$225000',
      'quantity': '10',
      'value': 'black',
      'location': 'San Jose, California',
  },
  {
      'title': 'Croissant',
      'owner': 'Sarah Southern',
      'price': '$1.62',
      'quantity': '6',
      'value': 'beige',
      'location': 'Dallas, Texas',
  },
  {
      'title': 'Camera',
      'owner': 'Terry Gross',
      'price': '$380',
      'quantity': '1',
      'value': 'red and white',
      'location': 'Seattle, Washington',
  }
];

const pe = styled.p`
background-color: orange;
`

function SayQL(props) {
    var fakeql=[];
    props.text.map((item) => fakeql.push(<Block><Card><p>{item.title}</p><p>{item.price}</p><p>{item.owner}</p><p>{item.value}</p><p>{item.location}</p></Card></Block>))
    return (
        <p>{fakeql}</p>
    )
};

export default function() {
    return (
        <SayQL text={many_things} />
    );
}

