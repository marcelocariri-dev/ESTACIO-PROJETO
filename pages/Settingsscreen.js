import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

export default function Settingsscreen ({navigation}) {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Configuração</Text>
        <Image source={require('../assets/file.png')} style={styles.image} /> {/*foto temporária*/}
        <Text style={styles.subtitle}>Funções</Text>
        <View style={styles.buttonContainer}>
          <Button title="Institucional" />
          <Button title="Relatórios" />
          <Button title="Notificações" />
          <Button title="Suporte" />
          <Button title="Log out" color="red" />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',   
  
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',   
  
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 18,
      marginBottom: 20,
    },
    buttonContainer: {
      width: '80%',
    },
  });