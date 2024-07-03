
// import React from 'react';
// import { useColorScheme } from '@/hooks/useColorScheme';


// // new layout
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {Drawer} from 'expo-router/drawer'
// import { DrawerActions } from '@react-navigation/native';
// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   // return (
//   //   <Tabs
//   //     screenOptions={{
//   //       tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//   //       headerShown: false,
        
//   //     }}>
//   //     <Tabs.Screen
//   //       name="index"
//   //       options={{
//   //         href:null,
//   //         title: 'Home',
//   //         tabBarIcon: ({ color, focused }) => (
//   //           <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//   //         ),
//   //       }}
//   //     />
//   //     <Tabs.Screen
//   //       name="explore"
//   //       options={{
//   //         href:null,
//   //         title: 'Explore',
//   //         tabBarIcon: ({ color, focused }) => (
//   //           <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//   //         ),
//   //       }}
//   //     />
//   //     {/* view Login  */}
//   //    <Tabs.Screen
//   //      name="login"
//   //      options={{
//   //       href:null
//   //      }}
//   //    /> 
//   //   </Tabs>
//   // );

//   return(
//     <GestureHandlerRootView>
//       <Drawer>
//        <Drawer.Screen
//         name='index'
//         options={{
//           drawerLabel:'Home',
//           title:'home'
//         }}
//        />    
//       </Drawer>
//     </GestureHandlerRootView>
//   );
// }


import { Redirect,Stack } from "expo-router";
import {useSession} from '@/scripts/ctx'
import {Text} from 'react-native';
import {Drawer} from 'expo-router/drawer'
import { DrawerActions } from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';



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
      <Drawer>
       <Drawer.Screen
        name='index'
        options={{
          drawerLabel:'Home',
          title:'home'
        }}
       />    
      </Drawer>
    </GestureHandlerRootView>
     );
}
