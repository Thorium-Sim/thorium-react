import React from 'react';
import uuid from 'uuid';
import App from './containers/App';
import ApolloClient from 'apollo-client';
import createNetworkInterface from 'apollo-upload-network-interface'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import { addTypenameToSelectionSet } from 'apollo-client/queries/queryTransform';
import { ApolloProvider } from 'react-apollo';
import './app.scss';

const wsClient = new SubscriptionClient('ws://apple.local:3002', {
  reconnect: true,
});

//Set a clientId for the client
let clientId = localStorage.getItem('thorium_clientId');
if (!clientId) {
  clientId = uuid.v4();
  //Just to test out the webpack
  localStorage.setItem('thorium_clientId',clientId);
}

const networkInterface = createNetworkInterface({
  uri: 'http://apple.local:3001/graphql',
  opts: {
    mode: 'cors',
  }
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
  );

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  queryTransformer: addTypenameToSelectionSet,
  dataIdFromObject: (result) => {
    if (result.id && result.__typename) {
      return result.__typename + result.id;
    }
    return null;
  },
});

const ApolloApp = () => (<ApolloProvider client={client}>
  <App />
  </ApolloProvider>);

export default ApolloApp;
