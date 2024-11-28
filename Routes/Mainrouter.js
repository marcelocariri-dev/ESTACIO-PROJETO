import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet } from "react-native";
import Drawer from "./Drawer";


export default function Mainrouter ()  {

    return (
   <NavigationContainer>
    <Drawer/>
   </NavigationContainer>     
    )


}
const tabstyle = StyleSheet.create({
    container: {
    backgroundColor:'#333333'
    }   
    })