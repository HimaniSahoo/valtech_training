import React, { useState } from "react";
import { StyleSheet, Button, View, Text,Image } from "react-native";
import ironman  from "./assets/images/ironman.jpg"
import batman  from "./assets/images/batman.jpg"
import superman  from "./assets/images/superman.jpg"
import spiderman  from "./assets/images/spiderman.jpg"
export default function App(){
  let [picture, setPicture] = useState({title:'',img:''})
  let changeHeroImg= (hero)=>{
    if (hero=="ironman"){
      setPicture({title:"ironman", img : ironman})
    }else if (hero=="batman"){
      setPicture({title:"batman", img:batman})
    }else if (hero=="superman"){
      setPicture({title:"superman", img:superman})
    }else{
      setPicture({title:"spiderman", img:spiderman})
    }

  }
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
      
    }]}>
      <View>
        <Text>{picture.title}</Text>
        <Image source={picture.img} />
      </View>
      
      <Button title="Ironman" onPress={()=>changeHeroImg("ironman")} style={styles.box1} />
      <Button title="Batman" onPress={()=>changeHeroImg("batman")} style={styles.box2} />
      <Button title="Superman" onPress={()=>changeHeroImg("superman")} style={styles.box3} />
      <Button title="Spiderman" onPress={()=>changeHeroImg("spiderman")} style={styles.box4} />
      {/* <Button onPress={()=>setColor(styles.box2.backgroundColor)} style={styles.box2} />
      <Button onPress={()=>setColor(styles.box3.backgroundColor)} style={styles.box3} />
      <Button onPress={()=>setColor(styles.box4.backgroundColor)} style={styles.box4} /> */}
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
    height : 100,
    width:100,
    
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




