import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Appbar, Text, Button, Card } from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Title title="Perfil" />
          <Card.Content>
          <Image source={require('@/assets/images/profile.jpg')} style={styles.image} />
            <Text style={styles.text}><Text style={styles.label}>Nombre:</Text> Gavano</Text>
            <Text style={styles.text}><Text style={styles.label}>Apellido Paterno:</Text> Smith</Text>
            <Text style={styles.text}><Text style={styles.label}>Apellido Materno:</Text> Gil</Text>
            <Text style={styles.text}><Text style={styles.label}>Numero de Empleado:</Text> 1001</Text>
            <Text style={styles.text}><Text style={styles.label}>Correo Electronico:</Text> smith_qualmag@gmail.com</Text>
            <Text style={styles.text}><Text style={styles.label}>Telefono:</Text> 3115672343</Text>
            <Text style={styles.text}><Text style={styles.label}>Puesto:</Text> Planeacion</Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => console.log('Edit Profile')}>Editar Perfil</Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  card: {
    padding: 16,
    backgroundColor:'#ffff'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 16,
  },
  text: {
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
