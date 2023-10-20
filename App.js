import 'react-native-gesture-handler';

// testing
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Welcome from "./screens/Welcome";
import User from './screens/User';
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#3c0a6b' },
        headerTintColor: 'white',
        drawerActiveBackgroundColor: '#f0e1ff',
        drawerActiveTintColor: '#3c0a6b',
      }}
      >
        <BottomTab.Screen 
        options={{
          tabBarIcon: ({color, size})=> {
            return <Ionicons name="home" color={color} size={35} />;
          }
        }}
        name="Welcom" 
        component={Welcome} 
        />

        <BottomTab.Screen 
        options={{
          tabBarIcon: ({color, size})=> {
            return <Ionicons name="person" color={color} size={35} />;
          }
        }}
        name="User" 
        component={User} 
        />
      </BottomTab.Navigator>
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
