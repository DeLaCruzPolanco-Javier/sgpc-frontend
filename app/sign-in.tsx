import { router } from 'expo-router';
import {Image,View,Text, StyleSheet, Alert} from 'react-native'
import {useState} from 'react';
import { useSession } from '@/scripts/ctx';
import { Input,Icon,Button } from '@rneui/themed'


export default function LoginScreen(){
    const { signIn } = useSession();

    //here, we defined those variables will be used such useState
   const [username,setUsername]=useState<string | undefined>('');
   const [password,setPassword]=useState<string | undefined>('');

   const [userError,setUserError]=useState<string | undefined>('');
   const [passError,setPassError]=useState<string  | undefined>('');

   //here, we defined a funcntion that will be check out if the inputs aren't null
   const checkInputs=()=>{
     if(username !== '' && username !== ''){
        signIn();
        router.replace('/');
     }else{
        username == '' && setUserError("the username input must not be empty");
        passError == '' && setPassError("the password input must not be empty");
     }
   }

    return (
    <View style={styles.container}>
         <Image
          source={require('@/assets/images/logo.png')}
          style={styles.reactLogo}          
         />
         <Text style={styles.titleH1}>QualMag</Text>
         <Text style={styles.titleH2}>Welcome Back</Text>
         <Text style={styles.titlesub} >sign in to continue to QualMag</Text> 
         <View style={{width:300,marginTop:20}}>
            {/* username  */}
             <Input
              label='username'
              onChangeText={setUsername}
              value={username}
              inputContainerStyle={{
                borderWidth:0,
              }}
              placeholder='Enter username'
              leftIcon={{type:'font-awesome',name:'user',color:'#5664D2'}}
              errorMessage={userError}
             />
             {/* passwors */}
             <Input
               label='password'
               onChangeText={setPassword}
               value={password}
               placeholder='Enter password'
               leftIcon={{type:'font-awesome',name:'lock',color:'#5664D2'}}
               secureTextEntry={true}
               errorMessage={passError}
             />
         </View>
         <Button
           onPress={() => {checkInputs()}}
           title="LOG IN"
           buttonStyle={{
            backgroundColor:'#5664D2',
            borderWidth:2,
            borderColor:'white',
            borderRadius:30
           }}
           containerStyle={{
            width:200,
            marginHorizontal:50,
            marginVertical:10
           }}
         />
         <View style={styles.verticalTXT}>
            <Icon 
              name='lock'
              type='font-awsome'
              color='#242A3A'
            />
            <Text style={styles.titlesub}>Forgot your password</Text>
         </View>
    </View>)
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:50,
        padding:40
    },
    titleH2:{
      fontSize:35,
      fontWeight:'bold',
      
    },
    titleH1:{
        fontSize:20,
        fontWeight:'bold',
        color:'#242A3A'
    },
    titlesub:{
      color:'#242A3A'
    },
    verticalTXT:{
       flex:1,
       flexDirection:'row',
       marginTop:10,
       color:'#242A3A'
    },
    reactLogo: {
      height: 78,
      width: 70,
    }
})