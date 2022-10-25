import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View,ScrollView } from 'react-native';
import Mainapp from './components/main';
export default function App() {
  let [state, setState] = useState('default title');
  let [color, setColor] = useState('red');
  let changeState = (args)=>{
    setState(args)
  }
  let changeColor =(args)=>{
    setColor(args);
  }
  return (<>
 
 <View style={styles.container}>
    <View style={ [view1.container,{backgroundColor:color}]}>
      <Button title='Home'> &nbsp;</Button>
      
      <Button title='menu'> &nbsp;</Button>   
      <StatusBar style="auto" />
    </View>
    <View><Text> &nbsp;<Mainapp/> &nbsp;</Text></View>
  </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
const view1 = StyleSheet.create({
  container: {marginTop:40, 
    alignItems:'center',
     borderWidth:2, borderColor:"red", 
     width:390, height : 150, 
     flexDirection:'row',
     backgroundColor: 'violet',
     alignItems:'center',
     fontSize:32,
    padding : 50},
    
});
const view2 = StyleSheet.create({
  container: {marginTop:20, width:"100%",
     borderWidth:2, borderColor:"green", 
     backgroundColor: 'grey',
     color:"white",
     flexDirection:'row',
     alignItems:'center',
     fontSize:32,
    padding : 20},
    
});
