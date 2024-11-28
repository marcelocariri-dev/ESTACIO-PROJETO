import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native';


const dados  = [
  { id: '1',
    title: 'CADASTRO DE MEMBROS',
    icon: 'add-circle-outline'

  }, 
  { id: '2',
    title: 'LISTA DE PRESENÇA',
    icon: 'accessibility-outline'
  },
  {id: 3,
    title: "LISTA DE EVENTOS",
    icon: 'calendar-number-outline'
  }
]



export default function Homescreen ({navigation}) {
    return (
<View style={styles.container}> 
<Text style={styles.title}> Olá, Igreja Central,</Text>
<View style={styles.image}>
  <Image source={require('../assets/igreja.png')} style={styles.imagefocus} resizeMode="contain" />
  </View>
  <View style={styles.ctext1}>
   
    <TouchableOpacity>
    <Text style={styles.text2} >ADICIONAR MEMBROS</Text>
    </TouchableOpacity>
    <TouchableOpacity>
   
    <Text style={styles.text1}>Cadastrar Eventos</Text>

    </TouchableOpacity>
 
  </View>
  <View style={styles.infoPanel}>
  <View style={styles.inforow}>
  <View style={styles.infoItem}>
        <Text style={styles.infoTitle}>7</Text>
        <Text style={styles.infoText}>Numero de membros</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoTitle}>16</Text>
        <Text style={styles.infoText}>Schedule Events</Text>
      </View>
    </View>
    <View style={styles.inforow}>
  <View style={styles.infoItem}>
        <Text style={styles.infoTitle}>7</Text>
        <Text style={styles.infoText}>Numero de membros</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoTitle}>16</Text>
        <Text style={styles.infoText}>Schedule Events</Text>
      </View>
    </View>
      
  </View>
  <View style={styles.events}>
    <Text style={styles.title}>
      Próximos Eventos
    </Text>
    <View style={styles.eventitem}>
    <Text style={styles.textEvent}>Culto de Oração</Text>
    </View>
  </View>
  
</View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
    paddingTop: 10,
  
  }, 
  image:{
justifyContent: 'center',
alignItems: 'center',
borderRadius: 10,
backgroundColor:'#1E90FF',
padding: 10,
margin: 5,


  },
  imagefocus:{
    height:100,
    width: 100,

  },
  ctext1:{

flexDirection: 'row',
 justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center'
    
  },
  text1:{
    backgroundColor: '#1E90FF',
    fontWeight: 'bold',
    borderRadius: 50,
    padding: 20,
    fontWeight: 'bold',
    fontSize: 15
  },
  text2:{
    backgroundColor: '#1E90FF',
    fontWeight: 'bold',
    borderRadius: 50,
    padding: 20,
    fontWeight: 'bold',
    fontSize: 13
    },
    title:{
      padding: 4,
     
      fontSize: 20
    },
    infoPanel: {
     
      justifyContent: 'space-around',
     
      backgroundColor: '#F0F0F0',
      padding: 10,
      
    },
    
    infoItem: {
      alignItems: 'center',
    },
    infoTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    infoText: {
      fontSize: 16,
    },
    inforow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 30,
      
      padding: 20,
     
    },
    events:{
    flexDirection: 'column',  
    padding: 30,
  backgroundColor: '#6495ED',
  borderRadius: 50,
    },
    eventitem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
    
      
    },
    textEvent:{
      fontWeight:'bold',
      fontSize: 22

    }
    

})
