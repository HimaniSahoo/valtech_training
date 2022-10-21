import { StyleSheet, Text, View} from "react-native";

export default function App()  {
  return (
    
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 2, backgroundColor: "#4f772d" }}>
        <Text style={{textAlign : "center" ,marginTop : "10", margin : "auto" , fontWeight : "bold", fontSize : "30px"}}>Header</Text>
      </View>
      <View style={{ flex: 5, backgroundColor: "#90a955" }}>
        <Text style={{textAlign : "center"  ,marginTop : "10", margin : "auto", fontWeight : "bold", fontSize : "30px"}}>Content</Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "#ecf39e" }}>
      <Text style={{textAlign : "center"  ,marginTop : "10", margin : "auto", fontWeight : "bold", fontSize : "30px"}}>Footer</Text></View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});