import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

export default function Menuscreen ({navigation}) {
    return (
<View>
<Text onPress={()=>navigation.navigate('home')}>menuscreen</Text>
</View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      alignItems: 'center',
      justifyContent: 'center',
    }},)