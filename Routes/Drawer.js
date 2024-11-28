import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigates from "./Navigates";

const Drawers = createDrawerNavigator();
export default function Drawer () {
 
    return (
<Drawers.Navigator>
<Drawers.Screen
 name="SKY FOR CHURCH"
 component={Navigates}
 options={{
 tabBarIcon: ({color, size})=> <Ionicons name="list" color= {color} size={size} />,
 tabBarLabel:'TESTE'
}}
/>


</Drawers.Navigator>
    )
}