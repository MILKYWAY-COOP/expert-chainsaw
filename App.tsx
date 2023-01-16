import * as React from 'react';

import StateProvider from './src/context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, RecipeDetailScreen } from './src/screens';

const Stack = createStackNavigator();

function App() {
  return (
    <StateProvider>
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='RecipeDetail' component={RecipeDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    </StateProvider>
  );
}

export default App;
