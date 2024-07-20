import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';

const OrderMaterialScreen = () => {
  const [name, setName] = React.useState('');
  const [color, setColor] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [position, setPosition] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          label="Nombre"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          label="Color de Materia Prima"
          value={color}
          onChangeText={text => setColor(text)}
          style={styles.input}
        />
        <TextInput
          label="Apellido Materno"
          value={lastName}
          onChangeText={text => setLastName(text)}
          style={styles.input}
        />
        <TextInput
          label="Correo Electrónico"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          label="Teléfono"
          value={phone}
          onChangeText={text => setPhone(text)}
          style={styles.input}
        />
        <TextInput
          label="Puesto"
          value={position}
          onChangeText={text => setPosition(text)}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={() => console.log('Ordenar')}>
            Ordenar
          </Button>
          <Button mode="outlined" onPress={() => console.log('Cancelar')} style={styles.cancelButton}>
            Cancelar
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    borderColor: 'red',
  },
});

export default OrderMaterialScreen;
