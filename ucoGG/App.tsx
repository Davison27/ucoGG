import * as React from 'react';
import HomeScreen from './src/components/pages/Homescreen/HomeScreen';
import Champion from './src/components/pages/Champion/Champion';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WebView} from 'react-native-webview';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ItemStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Champion"
        component={Champion}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function MapStackScreen() {
  return <WebView source={{uri: `https://map.leagueoflegends.com/en_US`}} />;
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: '#13181B',
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Item"
          component={ItemStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Map"
          component={MapStackScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
