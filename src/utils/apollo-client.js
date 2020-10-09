
import {
    ApolloClient,
    InMemoryCache,
} from '@apollo/client';
import { apiApollo } from "../../src/core/variables";
// import {WebSocket} from 'ws';
// import {WebSocketLink} from '@apollo/link-ws';
// const fetch = require('cross-fetch');
// const { getMainDefinition } = require('@apollo/client/utilities');
// // Create an http link:
// const httpLink = new HttpLink({
//     uri: apiApollo,
//     fetch,
//     headers: {
//         "x-hasura-admin-secret": "acoTTdemoCODai",
//     },
// })

// // Create a WebSocket link:
// const wsLink = new WebSocketLink({
//     uri: (apiApollo.indexOf("https") === 0 ? "wss" : "ws") + apiApollo.replace("https", "").replace("http", ""),
//     options: {
//         reconnect: true,
//         connectionParams: {
//             headers: {
//                 "x-hasura-admin-secret": "acoTTdemoCODai",
//             }
//         }
//     },

//     webSocketImpl: WebSocket,
// })
// // using the ability to split links, you can send data to each link/url
// // depending on what kind of operation is being sent
// const link = split(
//     // split based on operation type
//     ({
//         query
//     }) => {
//         const definition = getMainDefinition(query)
//         return (
//             definition.kind === "OperationDefinition" &&
//             definition.operation === "subscription"
//         )
//     },
//     wsLink,
//     httpLink
// )
const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }
const apolloClient = new ApolloClient({
    uri: apiApollo,
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
})

export default apolloClient;
