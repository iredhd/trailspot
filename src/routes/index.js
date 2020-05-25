import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Loading, Login } from '../screens';

const Stack = createStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator
      headerMode="none"
    >
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Loading"
        component={Loading}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
