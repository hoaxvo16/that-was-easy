import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThatWasEasy } from './components/ThatWasEasy';

export default function App() {
   return (
      <View style={styles.container}>
         <ThatWasEasy />
      </View>
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
