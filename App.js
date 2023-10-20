import 'react-native-gesture-handler';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Welcome from "./screens/Welcome";
import User from './screens/User';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#3c0a6b' },
        headerTintColor: 'white',
        drawerActiveBackgroundColor: '#f0e1ff',
        drawerActiveTintColor: '#3c0a6b',
      }}
      >
        <Drawer.Screen 
        options={{
          drawerLabel: "Welcome Screen",
          drawerIcon: ({color, size})=> {
            return <Ionicons name="home" color={color} size={size} />;
          }
        }}
        name="welcome" 
        component={Welcome} 
        />

        <Drawer.Screen 
        options={{
          drawerLabel: "User Screen",
          drawerIcon: ({color, size})=> {
            return <Ionicons name="person" color={color} size={size} />;
          }
        }}
        name="user" 
        component={User} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
