import React from 'react'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

import './App.css'
import Pokemon from './Pokemon'

const client = new ApolloClient({
  uri: "http://localhost:4000/"
})

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">React, GraphQL & Apollo - Pokedex</a>
      </nav>
      <div>
        <Pokemon />
      </div>
    </div>
  </ApolloProvider>
)

export default App
