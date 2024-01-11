import { Text, TextInput, View ,StyleSheet} from "react-native";
import { Component, ReactNode } from "react";

// const App = ()=>{
//   return(
//     <View>
//       <Text style={{textAlign:'center',
//                     fontSize:24,
//                     backgroundColor:'purple',
//                     color:'white'}}>!!Class Component in React-Native!!</Text>
//     </View>
//   )
// }
class Student extends Component{
  render(){
    return(
          <View>
            <Text style={{textAlign:'center',
                          fontSize:24,
                          backgroundColor:'#9acd32',
                          placeholderTextColor:"red",
                          color:'white'}}>!!Class Student Component in React-Native!!</Text>
                          <Text style={{textAlign:'center',fontSize:26,color:'purple'}}>Student Id</Text>
                          <TextInput placeholder="Enter Your Id : " style={styles.input} placeholderTextColor="red"/>
          </View>
        )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      height: 40,
      width: 420,
      borderColor: 'gray',
      borderWidth: 1,
      paddingLeft: 10,
      color: 'red', // Set the text color
      textAlign: 'center',
    },
});

export default Student;
