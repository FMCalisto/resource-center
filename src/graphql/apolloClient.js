import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://learn.wpgraphql/graphql'
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

export default client;
