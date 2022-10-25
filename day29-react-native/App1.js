import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Mainapp from './components/main';
 
export default function App() {
  let [state, setState] = useState('default title');
  let changeState = (args)=>{
    setState(args),
    backgroundColor = state
  }
  return (
   <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />
    <View style={{ ...styles.nestedbox, backgroundColor: state }}>
      <Mainapp changeState={changeState} title={ state }/>
    </View>
   </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 30,
    width : '100%'
  },
  nestedbox : {
    backgroundColor : 'Silver',
    
    flex : 1
  }
});