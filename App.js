
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Constants from './components/Constants';
import Icon from 'react-native-vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ContentDetails from './components/ContentDetails';
import Login from './screens/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navbar from './components/Navbar';

function HomeScreen() {

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={Home} 
          options={headerStyle}
        />
        <Stack.Screen name='contentDetails' 
        component={ContentDetails} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} 
          options={headerStyle}
        />
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}



const headerStyle={
  title: 'MetaFlix',
  headerStyle: {backgroundColor: Constants.baseColor},
  headerTitleStyle: {color: Constants.textColor},
  headerLeft: () => <Navbar />,
  headerRight: () => <Login />
};
export default App;