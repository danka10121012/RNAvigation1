import * as React from"react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const stack = createStackNavigator();

export function MyStack(){

    <Stack.Navigator>
<Stack.Screen 
name="Home"
component={HomeScreen}
options={{title: "Home Screen"}}

/>



<Stack.Screen 
name="Settings"
component={SettingsScreen}
options={{title: "Settings Screen"}}

/>
    </Stack.Navigator>
}

const Tab = createBottomTabNavigator();

export function TabNavigator(){

    return(

        <NavigationContainer>
        <Tab.Navigator>
<Tab.Screen 
name="Home"
component={HomeScreen}
options={{headerTitle: "HOME"}}
/> 


<Tab.Screen
name="Settings"
component={SettingsScreen}
options={{headerTitle: "SETTINGS"}}

/> 
        </Tab.Navigator>
        </NavigationContainer>
    )
}