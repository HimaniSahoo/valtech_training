import { useState } from "react"
import { Button, Text, View, StyleSheet,ScrollView, Image } from "react-native"
import axios from "axios";
 
let Mainapp = (props)=>{
    let [state,setState] = useState([])
    let getData = ()=>{
        axios.get("https://reqres.in/api/users?page=2").then((res)=>{
            setState(res.data.data)
        }).catch((err)=>{
                console.log("error",err)
        })
    }
    console.log(state);
    return<><View>
            <Button onPress={()=>{getData()}} title="get data"></Button>
            {
                state.map((val,idx)=>{
                   return <View>
                    <Image source={{uri : val.avatar, width:60,height:60}}></Image>
                    <Text>Id : {val.id}</Text>
                    <Text>firstname : {val.first_name}</Text>
                    <Text>lastname : {val.last_name}</Text>
                    <Text>email : {val.email}</Text>
                    </View>
                })
            } 
        </View>   
        </>          
}
 
let compstyle = StyleSheet.create({
    textStyle : {
        fontFamily : "sans-serif",
        fontSize : 24,
        color : 'white'
    }
})
export default Mainapp;