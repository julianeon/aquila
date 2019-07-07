import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import React from 'react';

const SayQL = () => (
  <Query
    query={gql`
      {
        books {
          title
          author
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error damn </p>;

      return data.books.map(({ title, author }) => (
        <div key={title}>
          <p>{title}: {author}</p>
        </div>
      ));
    }}
  </Query>
);

export default function() {
    return (
        <SayQL />
    );
}



