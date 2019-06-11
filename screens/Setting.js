import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
export  class Settings extends React.Component {

  
clickMe=()=>{
    alert('hi');
    this.props.navigation.navigate('HomeScreen')
  }
  render() {
    return (
      <View>
        <Text>This is the Settings screen</Text>
        <Button
          title="Go to Details"
          onPress={this.clickMe}
        />
      </View>
    )
  }
};

export default withNavigation(Settings);