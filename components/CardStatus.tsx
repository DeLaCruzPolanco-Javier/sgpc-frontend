import {Card ,Icon} from '@rneui/themed'
import { Text,View,Platform,StyleSheet } from 'react-native';

export function CardStatus({children}:{children:any}){
      return(
      <View style={Platform.OS==='web'?style.contenerFlexWeb:style.contenerFlewPhone}>
         {children}
      </View>
      )
}

export function CardElement({title,iconName,strongColor,lowColor,amount}:{title:string,iconName:string,strongColor:string,lowColor:string,amount:string}){
    return(
        <Card containerStyle={Platform.OS==='web'?style.cardStyleWeb:style.cardStylePhone}>
            <View style={Platform.OS==='web'?style.containerCardTitleWeb:style.containerCardTitlePhone}>
                  <Text style={Platform.OS==='web'?style.cardTitleWeb:style.cardTitlePhone}>{title}</Text>
                  <View style={{backgroundColor:lowColor,borderRadius:20, width:100,height:30 }}>
                     <Icon
                           name={iconName}
                           type='font-awesome'
                           color={strongColor}
                           size={25} 
                     />
                  </View>  
            </View>
            <Text style={{fontSize:40}}>{amount}</Text>
        </Card>
    )
}

const style=StyleSheet.create({
    contenerFlexWeb:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:15,
        width:'100%',
        marginBottom:10,
        paddingLeft:5,
        paddingRight:5,
    },
    contenerFlewPhone:{
        flex:1,
        justifyContent:'center',
        marginTop:15,
        width:'100%',
        marginBottom:10,
        paddingLeft:5,
        paddingRight:10,
    },
    cardStyleWeb:{
        width:'48%',
        height:120,
    },
    cardStylePhone:{
        width:'95%',
        height:120,
    },
    containerCardTitleWeb:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:10,
    },
    containerCardTitlePhone:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    cardTitleWeb:{
        fontSize:20,
        fontWeight:'600'
    }
    ,
    cardTitlePhone:{
        fontSize:20,
        fontWeight:'600'
    }

})