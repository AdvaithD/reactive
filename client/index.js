import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App.js'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter, Route } from 'react-router-dom'


const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <BrowserRouter>
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
</BrowserRouter>,
  document.getElementById('root')
)