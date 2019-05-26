import React from "react";
import { View, Text,StatusBar,ImageBackground,TextInput } from 'react-native';
import { Button } from "native-base";
import loginStyle from "../res/Styles/loginStyle"
import Setting from "../components/Setting"
import colors from "../res/Colors/colors"


export class Login extends React.Component
{

    static navigationOptions =
   {
    //   title: 'Login',
 
    //   headerStyle: {
 
    //   backgroundColor: colors.navBarBackground
 
    // },
 
    // headerTintColor: '#fff',
    header:null
 
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
     const loginBackgroundImage=require('../assets/loginBG.png')

        return (
          <ImageBackground style={loginStyle.BackgroundLW} source={loginBackgroundImage} >
            
             <View style={loginStyle.container}>
               
               <TextInput style={[loginStyle.inputField ,loginStyle.marginBottomContent]}   placeholderTextColor={colors.lightBlue} maxLength={25}  placeholder="Email" ></TextInput>
               <TextInput style={[loginStyle.inputField,loginStyle.marginBottomContent]}  placeholderTextColor={colors.lightBlue} maxLength={25}  placeholder="Password" ></TextInput>

               
              <Text >Login Screen Seen</Text>
            
            
             </View>
            </ImageBackground>

         
        )
      }

};
export default Login;