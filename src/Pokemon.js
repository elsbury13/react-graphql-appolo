import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Poke from './Poke'

const randomID = 1 + Math.floor(Math.random() * (807 - 1))

const Pokemon = () => (
  <Query
    query={gql`
      {
        pokemon(id: ${randomID}) {
          id,
          name,
          desc,
          pic,
          height,
          weight,
          types {
            id,
            name
          },
          evolution {
            name,
            url
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :( {error}</p>

      return <Poke pokemon={data.pokemon} />
    }}
  </Query>
)

export default Pokemon
