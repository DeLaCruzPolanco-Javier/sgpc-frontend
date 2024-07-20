import { View } from 'react-native';
import { useState } from 'react';


import { useSession } from '@/scripts/ctx';
//here, we imported our components
import {Table,TableHeader,RowT,ColumT} from '@/components/TableComponents'
import {CardStatus,CardElement} from '@/components/CardStatus';

import {Icon} from '@rneui/themed'
import { ScrollView } from 'react-native-gesture-handler';



export default function HomeCalidad(){ 
   
    //test data
    const [items]=useState([
        {
           orderID:1,
           name:"Manuel2",
           dateBegin:"22-03-2020",
           dateEnd:"23-02-2023",
           line:"angular"
        },
        {
           orderID:2,
           name:"Manuel2",
           dateBegin:"22-03-2020",
           dateEnd:"23-02-2023",
           line:"angular"
        },
        {
           orderID:3,
           name:"Manuel2",
           dateBegin:"22-03-2020",
           dateEnd:"23-02-2023",
           line:"angular"
        },
        {
           orderID:4,
           name:"Manuel2",
           dateBegin:"22-03-2020",
           dateEnd:"23-02-2023",
           line:"angular"
        },
        {
           orderID:5,
           name:"Manuel2",
           dateBegin:"22-03-2020",
           dateEnd:"23-02-2023",
           line:"angular"
        },
        {
           orderID:6,
           name:"Manuel2",
           dateBegin:"22-03-2020",
           dateEnd:"23-02-2023",
           line:"angular"
        },
        {
            orderID:7,
            name:"Manuel2",
            dateBegin:"22-03-2020",
            dateEnd:"23-02-2023",
            line:"angular"
         },
         {
            orderID:8,
            name:"Manuel2",
            dateBegin:"22-03-2020",
            dateEnd:"23-02-2023",
            line:"angular"
         }

       ]);

       return (
        <ScrollView >
          <View>  
              {/*this table is to show how many active orders or complete order here  to check   */}
              <CardStatus>
                <CardElement 
                   title='Pending Checks' 
                   iconName='folder-open'
                   strongColor='#00778A'
                   lowColor='rgba(10,180,193,0.15)'
                   amount='8'
                   />
                <CardElement 
                   title='Complete Checks' 
                   iconName='check'
                   strongColor='#0B8A00'
                   lowColor='rgba(35,193,10,0.15)'
                   amount='8'
                   />
              </CardStatus>

              {/*this table is to show pending check orders  */}
             <Table>
               <TableHeader title="Order's Pending Checks" valueHeader={["Order id","Name","Data Begin","Date end","Line of production","Action"]}/>
               {items.map((item)=>(
                  <RowT key={item.orderID}>
                     <ColumT>{item.orderID}</ColumT>
                     <ColumT>{item.name}</ColumT>
                     <ColumT>{item.dateBegin}</ColumT>
                     <ColumT>{item.dateEnd}</ColumT>
                     <ColumT>{item.line}</ColumT>
                     <ColumT>
                      <View>
                         <Icon 
                            name='edit'
                            type='font-awesome'
                            color='#5664D2'
                            size={40}
                          />
                      </View> 
                     </ColumT>
                  </RowT>
               ))}
             </Table> 

             {/* this table is to show completing check orders */}
             <Table>
               <TableHeader title="Order's Completed Checks" valueHeader={["Order id","Name","Data Begin","Date end","Line of production","Action"]}/>
               {items.map((item)=>(
                  <RowT key={item.orderID}>
                     <ColumT>{item.orderID}</ColumT>
                     <ColumT>{item.name}</ColumT>
                     <ColumT>{item.dateBegin}</ColumT>
                     <ColumT>{item.dateEnd}</ColumT>
                     <ColumT>{item.line}</ColumT>
                     <ColumT>
                      <View>
                         <Icon 
                            name='window-restore'
                            type='font-awesome'
                            color='#5664D2'
                            size={30}
                          />
                      </View> 
                     </ColumT>
                  </RowT>
               ))}
             </Table> 

          </View>
       </ScrollView>
       )

}

