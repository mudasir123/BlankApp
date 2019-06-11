import { StyleSheet } from "react-native";
import colors from "../Colors/colors"

const componentStyle=StyleSheet.create(
{
  TextInputIconView:{

               flexDirection: 'row',
               height:40,
               width:'60%',
               color:'white',
               borderColor:colors.lightBlue,
               borderWidth:1,
               paddingLeft:10,
               paddingRight:10,
               borderRadius:20,
               justifyContent: 'center', alignItems: 'center'
  }

}

);

export default componentStyle