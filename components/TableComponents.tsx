//here, we import some components from  some libreraries
import {Text,Card} from '@rneui/themed'
import {StyleSheet, Platform} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import {DataTable} from 'react-native-paper';

//we defined our priciple component it is a table or father tag 
export function Table({children}:{children:any}){
    return(
      <Card>
         {Platform.OS==='web'?(
           <DataTable>{children}</DataTable>
         ):(
          <ScrollView horizontal style={{flex:1}}>
            <DataTable  style= {{width:700}}>{children}</DataTable>
          </ScrollView>
         )}
          
      </Card>  
    )
}
/**
 * 
we defined our tag header to table, this component is used to deploy the title a array with  header column

 */
export function TableHeader({title,valueHeader}:{title:string,valueHeader:string[]}){
  return(
   <>
   <Text style={styles.titleTable}>{title}</Text>
   <DataTable.Header>
        {valueHeader.map((value,index)=><DataTable.Title key={index}>{value}</DataTable.Title>)}
    </DataTable.Header>
   </>
    
  )
}

//here, we defined two main components those are RowT and ColumT to display the data, it will be content of the table
export function RowT({children}:{children:any}){
   return (
      <DataTable.Row>{children}</DataTable.Row>
   )
}
export function ColumT({children}:{children:any}){
     return(<DataTable.Cell style={{flex: 2}}>{children}</DataTable.Cell>);
}



const styles=StyleSheet.create({
   titleTable:{
      fontSize:30,
      fontWeight:'600'
   }
})





