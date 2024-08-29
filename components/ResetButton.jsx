import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Dialog from 'react-native-dialog';
import ResetIcon from './ResetIcon';
import { ScaledSheet, scale } from 'react-native-size-matters';

const ResetButton = ({ canReset, onReset }) => {
  const [isDialogVisible, setDialogVisible] = useState(false);

  const showResetDialog = () => {
    if (canReset) {
      setDialogVisible(true); // Muestra el diálogo solo si se puede reiniciar
    }
  };

  const handleCancel = () => {
    setDialogVisible(false); // Cierra el diálogo sin hacer nada
  };

  const handleConfirmReset = () => {
    onReset(); // Llama a la función de reinicio pasada como prop
    setDialogVisible(false); // Cierra el diálogo
  };

  return (
    <View style={styles.resetButtonContainer}>
      <TouchableOpacity onPress={showResetDialog} disabled={!canReset}>
        <ResetIcon color={canReset ? '#777777' : '#77777750'} />
      </TouchableOpacity>

      {/* Diálogo de confirmación */}
      <Dialog.Container visible={isDialogVisible} contentStyle={styles.dialogContainer}>
        <Dialog.Title style={styles.dialogTitle}>Confirmar Reinicio</Dialog.Title>
        <Dialog.Description style={styles.dialogDescription}>
          ¿Estás seguro que deseas reiniciar el marcador?
        </Dialog.Description>
        <Dialog.Button label="Cancelar" onPress={handleCancel} style={styles.dialogButton}/>
        <Dialog.Button label="Reiniciar" onPress={handleConfirmReset} style={styles.dialogButton}/>
      </Dialog.Container>
    </View>
  );
};

const styles = ScaledSheet.create({
  resetButtonContainer: {
    position: 'absolute',
    bottom: '20@s',
    left: '50%',
    transform: [{ translateX: scale(-50) }],
    width: '100@s',
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
  dialogDescription: {
    fontSize: '16@s',
    fontWeight: '400',
    color: '#fff', // Color del título
  },
  dialogButton: {
    fontSize: '15@s',
    paddingLeft: '30@s',
    color: '#FFCC00', // Color del texto del botón
  },
});

export default ResetButton;
