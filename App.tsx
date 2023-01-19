import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Navigation from './src/navigation';
import StateProvider from './src/context';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        style='dark'
        animated={true}
        backgroundColor='yellow'
        hidden={false}
      />
      <StateProvider>
        <>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </>
      </StateProvider>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFE0',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  buttonsContainer: {
    padding: 10
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8
  }
});
