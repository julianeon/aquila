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

const SayQL = () => (
  <Query
    query={gql`
      {
        things {
          title
          location
          owner
          price
          quantity
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error damn </p>;

        return data.things.map(({ title, owner, price, location, quantity }) => (
            <Block>
              <Card>
        <div key={title}>
          <p>{title}</p>
          <p>{owner}</p>
          <p>{price}</p>          
          <p>{location}</p>
          <p>{quantity}</p>          
            </div>
            </Card>
            </Block>
      ));
    }}
  </Query>
);

export default function() {
    return (
        <SayQL />
    );
}

