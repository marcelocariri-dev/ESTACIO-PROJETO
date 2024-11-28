import 'react-native-gesture-handler';
import Mainrouter from "./Routes/Mainrouter";
import { StyleSheet, View } from "react-native";
import "./global.css"

export default function App() {
  return (
    
<Mainrouter style={styles.container}/>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1,
  backgroundColor: '#E41F1F',
   alignItems: 'center',
  justifyContent: 'center',

  }
})