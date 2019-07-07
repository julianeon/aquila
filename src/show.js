import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import React from 'react';
import styled from 'styled-components';

const Names=styled.div`
background-color: black;
color: white;
margin-left: 10px;
margin-top: 10px;
  background-image: linear-gradient(to right, black , #787878);
`

const SayQL = () => (
  <Query
    query={gql`
      {
        __schema {
          types {
          name }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error damn </p>;

        return data.__schema.types.map(({ name }) => (
        <Names key={name}>
          <p>{name}</p>
        </Names>
      ));
    }}
  </Query>
);

export default function() {
    return (
        <>
        <p>Your schema is ready to use.</p>
        <SayQL />
        </>
    );
}



