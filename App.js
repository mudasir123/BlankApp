import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import  Setting  from "./components/Setting";
import  Home  from "./components/Home";
import  Login from "./components/Login"

const RootStack = createStackNavigator(
  {
    HomeScreen: {
      screen: Home
    },
    SettingScreen: {
      screen: Setting
    },
    LoginScreen:{
      screen:Login
    }
  },
  {
    initialRouteName: 'LoginScreen'
  }

);

export  class App extends React.Component {
  // constructor(props)
  // {
  //   super(props)
  //    this.state={
  //      count:0
  //    }
  // }
  
  // coutNumber=()=>{
  //    this.setState({
  //      count:this.state.count+1
  //    })

  // }
  render() {
    return <RootStack />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default createAppContainer(RootStack);
// export default createAppContainer(AppNavigator);
