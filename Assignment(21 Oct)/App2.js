import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App(){
  let [color, setColor] = useState("white")
  return (
    <View style={[styles.container, {
   
      flexDirection: "row",
      backgroundColor: color
    }]}>
      
      <Text  onPress={()=>setColor(styles.box1.backgroundColor)} style={styles.box1} />
      <Text onPress={()=>setColor(styles.box2.backgroundColor)} style={styles.box2} />
      <Text onPress={()=>setColor(styles.box3.backgroundColor)} style={styles.box3} />
      <Text onPress={()=>setColor(styles.box4.backgroundColor)} style={styles.box4} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 20
    
  },
  box1 : {
    flex :1,
    backgroundColor : "#a3c4f3",
    height : 100
  },
  box2 : {
    flex :1,
    backgroundColor : "#f1c0e8",
    height : 100
  },
  box3 : {
    flex :1,
    backgroundColor : "#ffcfd2",
    height : 100
  },
  box4 : {
    flex :1,
    backgroundColor : "#fde4cf",
    height : 100
  }
 
});