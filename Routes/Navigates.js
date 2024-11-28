

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens

import Homescreen from "../pages/Homescreen";
import Menuscreen from "../pages/Menuscreen";
import Settingsscreen from "../pages/Settingsscreen";
//screen names



const Tab = createBottomTabNavigator();

export default function Navigates (){

return(
 
       <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen  
        name="homepage"
        component={Homescreen}
        options={{
        tabBarIcon: ({color, size})=> <Ionicons name="home" color= {color} size={size} />,
        tabBarLabel:'Início'
      
        }}
        
        />


<Tab.Screen  
        name="menuscreen"
        component={Menuscreen}
        options={{
        tabBarIcon: ({color, size})=> <Ionicons name="list" color= {color} size={size} 
        />,
        tabBarLabel:'Menu' 
        }}
        
        />

        

<Tab.Screen  
        name="settingsscreen"
        component={Settingsscreen}
        options={{
        tabBarIcon: ({color, size})=> <Ionicons name="settings" color= {color} size={size} 
        />,
        tabBarLabel:'Configurações' 
        }}
     
        
        />
       </Tab.Navigator>
 
)
}

