import { Text, TextInput, View } from "react-native";
import { Component } from "react";
import Student from "./comonents/student";
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
class App extends Component{
  render(){
    return(
          <View>
            <Text style={{textAlign:'center',
                          fontSize:24,
                          backgroundColor:'#9acd32',
                          color:'white'}}>!!Class Component in React-Native!!</Text>
                          <TextInput placeholder="Enter Your Name : "
                          style={{textAlign:'center',
                          fontSize:24,
                          backgroundColor:'#ee82ee',
                          color:'cyan',borderColor:'red'}}/>
                          <Student/>
          </View>
        )
  }
}
export default App;
