import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Dialog from 'react-native-dialog';
import { ScaledSheet } from 'react-native-size-matters';

export function PlayerText({ playerName }) {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(playerName); // Estado principal del nombre
  const [tempName, setTempName] = useState(playerName); // Estado temporal para el diálogo

  const showDialog = () => {
    setTempName(name); // Inicializar el diálogo con el nombre actual
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSave = () => {
    setName(tempName); // Guardar el nombre temporal en el estado principal
    setVisible(false);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={showDialog}>
      <Text style={styles.playertext}>{name}</Text>

      <Dialog.Container visible={visible} contentStyle={styles.dialogContainer}>
        <Dialog.Title style={styles.dialogTitle} >Nombre del jugador</Dialog.Title>
        <Dialog.Input style={styles.dialogInput}
          value={tempName}
          onChangeText={(newName) => setTempName(newName)} // Actualizar solo el estado temporal
        />
        <Dialog.Button label="Cancelar" onPress={handleCancel} style={styles.dialogButton} />
        <Dialog.Button label="Guardar" onPress={handleSave} style={styles.dialogButton} />
      </Dialog.Container>
    </TouchableOpacity>
  );
}

const styles = ScaledSheet.create({
  playertext: {
    fontSize: '20@s',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#00000010',
    padding: '10@s',
    marginTop: '20@s',
    borderRadius: '2@s',
    minWidth: '265@s',
    alignItems: 'center',
  },
  dialogContainer: {
    backgroundColor: '#555555', // Fondo del diálogo
    borderRadius: '10@s', // Bordes redondeados
    padding: '20@s', // Padding interno del diálogo
  },
  dialogTitle: {
    fontSize: '20@s',
    fontWeight: 'bold',
    color: '#fff', // Color del título
  },
  dialogInput: {
    fontSize: '18@s',
    fontWeight: '400',
    color: '#fff', // Color del título
  },
  dialogButton: {
      fontSize: '15@s',
      paddingLeft: '20@s',
      color: '#FFCC00', // Color del texto del botón
    },
  });
