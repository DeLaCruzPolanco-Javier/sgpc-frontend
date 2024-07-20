/*
 view Admin 
 */

import React from 'react'; //common react libraries
import { View, StyleSheet, FlatList } from 'react-native'; //common react libraries 
import { Appbar, Text, Card, Button, DataTable } from 'react-native-paper'; //style libraries

//this is a object to show in a table
const data = [
    { id: '15293', name: 'Lego Verde', date: '28 Marzo, 2024', line: '22', quantity: '1000 Pza', status: 'Active' },
    { id: '15294', name: 'Lego Rojo', date: '28 Marzo, 2024', line: '24', quantity: '1000 Pza', status: 'Delay' },
    // to add more dates, here
  ];
  

export default function HomeAdmin(){
    const renderItem = ({ item }:{item:any}) => (
        <DataTable.Row>
          <DataTable.Cell>{item.id}</DataTable.Cell>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.date}</DataTable.Cell>
          <DataTable.Cell>{item.line}</DataTable.Cell>
          <DataTable.Cell>{item.quantity}</DataTable.Cell>
          <DataTable.Cell>{item.status}</DataTable.Cell>
        </DataTable.Row>
      );
    

      return (
        <View style={styles.container}>
          <View style={styles.content}>
            <Card style={styles.card}>
              <Card.Title title="Active Works" subtitle="7" />
            </Card>
            <Card style={styles.card}>
              <Card.Title title="Delay Works" subtitle="1" />
            </Card>
            <DataTable style={styles.table}>
              <DataTable.Header>
                <DataTable.Title>Work ID</DataTable.Title>
                <DataTable.Title>Nombre</DataTable.Title>
                <DataTable.Title>Fecha</DataTable.Title>
                <DataTable.Title>Linea Produccion</DataTable.Title>
                <DataTable.Title>Cantidad</DataTable.Title>
                <DataTable.Title>Status</DataTable.Title>
              </DataTable.Header>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </DataTable>
          </View>
        </View>
      );
    
      
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      padding: 16,
    },
    card: {
      marginBottom: 16,
      backgroundColor:'#fff'
    },
    table:{
        backgroundColor:'#fff'
    }
  });
  