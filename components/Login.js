import React from "react";
import { View, Text, Button } from 'react-native';
import loginStyle from "../res/Styles/loginStyle"
import Setting from "../components/Setting"
import colors from "../res/Colors/colors"

export class Login extends React.Component
{
    static navigationOptions =
   {
      title: 'Login',
 
      headerStyle: {
 
      backgroundColor: colors.navBarBackground
 
    },
 
    headerTintColor: '#fff',
 
 };
   
    // render()
    // {
    //     return
    //     {
    //         <View style={loginStyle.container}>
    //          <Text>Hello</Text>
    //         </View>
          
    //     }
    // }
    render() {
        return (
          <View style={loginStyle.container}>
            <Text>Login Screen</Text>
            <Setting></Setting>
            
          </View>
        )
      }

};
export default Login;