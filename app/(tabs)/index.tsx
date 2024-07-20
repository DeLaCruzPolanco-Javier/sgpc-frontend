import {Text,View } from 'react-native';
import { useSession } from '@/scripts/ctx';

//views to see in the index to different users
import HomeCalidad from '@/app/(tabs)/calidad/index'
import HomeAdmin from '@/app/(tabs)/administrador/index'
export default function HomeScreen() {
  const { signOut } = useSession();
 
  return (
      <>
       <HomeAdmin/>
       <Text onPress={() => {signOut();}}>Sign Out</Text> 
      </>
  );
}
