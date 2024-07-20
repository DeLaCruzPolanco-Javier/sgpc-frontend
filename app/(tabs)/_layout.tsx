import { Redirect,Stack } from "expo-router";
import {useSession} from '@/scripts/ctx'
import {Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CustomDrawerContent from '@/components/CustomDrawer'

//pages
import HomeScreen  from '@/app/(tabs)/index' 
import ProfileScreen from '@/app/(tabs)/Profile'

//in this line, it will execute a function to routers and nav
const Drawer = createDrawerNavigator();

export default function AppLayout(){
   const {session,isLoading}=useSession();

   if(isLoading){
     return <Text>Loading ....</Text>
   }

   if(!session){
    return <Redirect href="/sign-in"/>;
   }


   return(
    <GestureHandlerRootView>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerLabel: 'Home',
            title: 'Home'
          }}
        />
       
       <Drawer.Screen
         name='Profile'
         component={ProfileScreen}
         options={{
            drawerLabel: 'Profile',
            title: 'Profile'
         }}
       />

       {/* <Drawer.Screen
        name='index'
        options={{
          drawerLabel:'Home',
          title:'home'
        }}
       /> 
       <Drawer.Screen
        name='Profile'
        options={{
          drawerLabel:'Profile',
          title:'Profile'
        }}
       />     */}
      </Drawer.Navigator>
    </GestureHandlerRootView>
     );
}
