import React from "react";
import { View,TextInput ,Image} from "react-native";
import  componentStyle  from "../res/Styles/componentStyle";

export class TextInputIconField extends React.Component
{
    render()
    {
        return(
            <View style={[componentStyle.TextInputIconView]}>
            <TextInput placeholder="hello" style={{flex:5}}></TextInput>
            <Image style={{width:25,height:25}} source={require("../assets/icon.png")}></Image>

            </View>
        )
    }
}

export default TextInputIconField