import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Home from '../screens/home/HomeScreen';
import OnBoardingScreen from '../screens/onboardingUI/OnBoardingScreen';

const Stack = createStackNavigator();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'modal',
      }}>
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        // screenOptions={{animation: 'none'}}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        // screenOptions={{animation: 'none'}}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}
