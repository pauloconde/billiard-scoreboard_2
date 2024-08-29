import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Dialog from 'react-native-dialog';
import InfoIcon from './InfoIcon'; // Asegúrate de tener este componente
import { ScaledSheet } from 'react-native-size-matters';

const InfoButton = () => {
  const [isInfoDialogVisible, setInfoDialogVisible] = useState(false);

  const showInfoDialog = () => {
    setInfoDialogVisible(true); // Muestra el diálogo de información
  };

  const handleInfoCancel = () => {
    setInfoDialogVisible(false); // Cierra el diálogo de información
  };

  return (
    <View>
      <TouchableOpacity onPress={showInfoDialog}>
        <InfoIcon color={'#777777'} />
      </TouchableOpacity>

      {/* Diálogo de información */}
      <Dialog.Container visible={isInfoDialogVisible} contentStyle={styles.dialogContainer}>
        <Dialog.Title style={styles.dialogTitle}>Desarrollado por:</Dialog.Title>
        <Dialog.Description style={styles.dialogDescription}>
          Paulo Conde{'\n'}
          pauloconde@gmail.com{'\n'}
          Tel: +58 (414) 7494763{'\n'}
          Barinas, Venezuela.
        </Dialog.Description>
        <Dialog.Button label="Cerrar" onPress={handleInfoCancel} style={styles.dialogButton}/>
      </Dialog.Container>
    </View>
  );
};

const styles = ScaledSheet.create({
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
    lineHeight: '22@s',
    color: '#fff', // Color del título
  },
  dialogButton: {
    fontSize: '15@s',
    paddingLeft: '30@s',
    color: '#FFCC00', // Color del texto del botón
  },
});

export default InfoButton;
