import { StyleSheet } from 'react-native';
import colors from "../Colors/colors"

const loginStyle=StyleSheet.create(
{
   container:{
    
      // backgroundColor:colors.title,  
       flex:1,
       justifyContent: 'center',
       alignItems: 'center'
   }
   ,
   BackgroundLW:{
       height:'100%',
       width:'100%'
   },
   inputField:{
       height:40,
       width:'60%',
       color:'white',
       borderColor:colors.white,
       borderWidth:1,
       paddingLeft:10,
       paddingRight:10,
       borderRadius:20
   },
   marginBottomContent:{
       marginBottom:10
   },
   ButtonRound:{
     
   }



}
);

export default loginStyle