/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {WebSocketLink} from '@apollo/client/link/ws';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './screens/LoginScreen';

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'wss://dev01.bisly.com/api',
    options: {
      reconnect: true,
    },
  }),
  cache: new InMemoryCache(),
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <LoginScreen />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;
