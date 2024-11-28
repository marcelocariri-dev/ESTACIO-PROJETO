import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

export default function Settingsscreen ({navigation}) {
    return (
<View style={styles.container}>
<Text style={styles.Title}>setingsscreen</Text>
</View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
      alignItems: 'center',
      justifyContent: 'center',
    },
Title: {
fontSize: '22',
font: 'bold'
}},)