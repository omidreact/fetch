import React,{useEffect,useState} from "react";
import { View,Text,StyleSheet,VirtualizedList } from "react-native";
function App(){
  const [data,setData]=useState();
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[])
  return(
      <View style={styles.first}>
          <Text style={styles.firsttext}>hi</Text>
<Text>{console.log(data)}</Text>
      </View>
  )
}
const styles=StyleSheet.create({
  first:{
    flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"lightblue"
  },
  firsttext:{
    fontSize:50,
    color:"gray",
    fontWeight:"bold"
  }
})
export default App;