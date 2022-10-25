import { useState } from "react";
import { Button, Text,View,StyleSheet, Platform,Image } from "react-native";
export default function Details(){

  return(    
    <View style={[mystyle.viewstyle,{backgroundColor:"grey"}]}>

      <View>
        <Text style={{fontSize:52, color: "#52b69a"}}>Avengers</Text>
      </View>
      <Text/>

      <View>

        {/* <Text style={{fontSize:22}}>
        Firstname: {name.firstname}{"\n"}
      Lastname: {name.lastname}</Text> */}
      <Text style={{fontSize:32,textAlign:"center",color:"#22007c"}} >{name.title}{"\n"} </Text> 
        <Image source={ {uri:"https://tooncrush.com/valtech/rajani.jpg"} } style={{width:300, height:300}}></Image>


      <View >
        <Button onPress={()=>changeImage("hulk")} title="Hulk"></Button>
        <Text></Text>
        <Button onPress={()=>changeImage("superman")} title="Superman"></Button>
        <Text></Text>
      </View>
      <View style={{justifyContent:'space-between'}}>
        <Button onPress={()=>changeImage("ironman")} title="Ironman"></Button> 
        <Text></Text>
        <Button onPress={()=>changeImage("spiderman")} title="spiderman"></Button>
        <Text/>
      </View>


      </View>

     </View>
   
  )
}
let mystyle = StyleSheet.create({
  viewstyle:{
    flex:1,justifyContent:'center',alignItems:'center',paddingTop: Platform.OS ==="android"?30:0
  }
})