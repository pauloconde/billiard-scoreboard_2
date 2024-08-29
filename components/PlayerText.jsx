import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Dialog from 'react-native-dialog';

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
                <Dialog.Button label="Cancelar" onPress={handleCancel} style={styles.dialogButton}/>
                <Dialog.Button label="Guardar" onPress={handleSave} style={styles.dialogButton}/>
            </Dialog.Container>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    playertext: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
      
        backgroundColor: '#dddddd70',
        padding: 20,
        margin: 10,
        borderRadius: 20,
        minWidth: 250,
        alignItems: 'center',
    },
    dialogContainer: {
      backgroundColor: '#555555', // Fondo del diálogo
      borderRadius: 10, // Bordes redondeados
      padding: 20, // Padding interno del diálogo
    },
    dialogTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff', // Color del título
    },
    dialogInput: {
      fontSize: 18,
      fontWeight: '400',
      color: '#fff', // Color del título
    },
    dialogButton: {
      color: '#FFCC00', // Color del texto del botón
    },
});
