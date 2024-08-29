import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
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
           
            <Dialog.Container visible={visible}>
                <Dialog.Title>Nombre del jugador</Dialog.Title>
                <Dialog.Input 
                  value={tempName}
                  onChangeText={(newName) => setTempName(newName)} // Actualizar solo el estado temporal
                />
                <Dialog.Button label="Cancelar" onPress={handleCancel} />
                <Dialog.Button label="Guardar" onPress={handleSave} />
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
    },
});
