import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Dialog from 'react-native-dialog';
import { PlayerText } from './components/PlayerText';
import { PlayerPoints } from './components/PlayerPoints';
import { EntradasCount } from './components/EntradasCount';
import ResetIcon from './components/ResetIcon';
import InfoIcon from './components/InfoIcon';  // Asegúrate de tener este componente

export default function App() {
  const [playerPointsA, setPlayerPointsA] = useState(0);
  const [playerPointsB, setPlayerPointsB] = useState(0);
  const [entradasCount, setEntradasCount] = useState(0);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [isInfoDialogVisible, setInfoDialogVisible] = useState(false); // Estado para el diálogo de información
  const [canReset, setCanReset] = useState(false); // Controla si el botón de reiniciar está habilitado

  useEffect(() => {
    // Verifica si al menos uno de los contadores es diferente de cero
    if (playerPointsA !== 0 || playerPointsB !== 0 || entradasCount !== 0) {
      setCanReset(true);
    } else {
      setCanReset(false);
    }
  }, [playerPointsA, playerPointsB, entradasCount]);

  const resetAll = () => {
    setPlayerPointsA(0);
    setPlayerPointsB(0);
    setEntradasCount(0);
    setDialogVisible(false);
  };

  const showResetDialog = () => {
    if (canReset) {
      setDialogVisible(true); // Muestra el diálogo solo si se puede reiniciar
    }
  };

  const handleCancel = () => {
    setDialogVisible(false); // Cierra el diálogo sin hacer nada
  };

  const showInfoDialog = () => {
    setInfoDialogVisible(true); // Muestra el diálogo de información
  };

  const handleInfoCancel = () => {
    setInfoDialogVisible(false); // Cierra el diálogo de información
  };

  return (
    <View style={styles.pantalla}>
      <View style={styles.marcadorizquierdo}>
        <PlayerText playerName={'Jugador 1'} />
        <PlayerPoints points={playerPointsA} setPoints={setPlayerPointsA} />
      </View>
      <View style={styles.marcadorderecho}>
        <PlayerText playerName={'Jugador 2'} />
        <PlayerPoints points={playerPointsB} setPoints={setPlayerPointsB} />
      </View>
      <EntradasCount count={entradasCount} setCount={setEntradasCount} />

      <View style={styles.resetButtonContainer}>
        <TouchableOpacity onPress={showResetDialog} disabled={!canReset}> 
          <ResetIcon color={canReset ? '#777777' : '#77777750'} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.infoIconContainer} onPress={showInfoDialog}>
        <InfoIcon color={'#777777'}/>
      </TouchableOpacity>

      {/* Diálogo de confirmación */}
      <Dialog.Container visible={isDialogVisible}>
        <Dialog.Title>Confirmar Reinicio</Dialog.Title>
        <Dialog.Description>
          ¿Estás seguro que deseas reiniciar el marcador?
        </Dialog.Description>
        <Dialog.Button label="Cancelar" onPress={handleCancel} />
        <Dialog.Button label="Reiniciar" onPress={resetAll} />
      </Dialog.Container>

      {/* Diálogo de información */}
      <Dialog.Container visible={isInfoDialogVisible}>
        <Dialog.Title>Desarrollado por:</Dialog.Title>
        <Dialog.Description>
          Paulo Conde{'\n'}
          pauloconde@gmail.com{'\n'}
          Tel: +58 (414) 7494763{'\n'}
          Barinas, Venezuela.
        </Dialog.Description>
        <Dialog.Button label="Cerrar" onPress={handleInfoCancel} />
      </Dialog.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marcadorizquierdo: {
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marcadorderecho: {
    height: '100%',
    flex: 1,
    backgroundColor: '#FFCC00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -50 }],
    width: 100,
    alignItems: 'center',
  },
  infoIconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20, // Posiciona el icono en la esquina inferior derecha
  },
});
