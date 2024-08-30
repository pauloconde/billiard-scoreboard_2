import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { PlayerText } from './components/PlayerText';
import { PlayerPoints } from './components/PlayerPoints';
import { EntriesCount } from './components/EntriesCount';
import ResetButton from './components/ResetButton';
import InfoButton from './components/InfoButton';
import { ScaledSheet } from 'react-native-size-matters';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  const [playerPointsA, setPlayerPointsA] = useState(0);
  const [playerPointsB, setPlayerPointsB] = useState(0);
  const [entriesCount, setEntriesCount] = useState(0);
  const [canReset, setCanReset] = useState(false); // Controla si el botón de reiniciar está habilitado

  useEffect(() => {
    if (playerPointsA !== 0 || playerPointsB !== 0 || entriesCount !== 0) {
      setCanReset(true);
    } else {
      setCanReset(false);
    }
  }, [playerPointsA, playerPointsB, entriesCount]);

  useEffect(() => {
    // Ocultar la barra de estado
    StatusBar.setHidden(true);

    // Configurar la barra de navegación para ocultarla
    NavigationBar.setVisibilityAsync('hidden');
    NavigationBar.setBehaviorAsync('overlay-swipe'); // Permite que la barra de navegación se muestre con un swipe si es necesario
  }, []);

  const resetAll = () => {
    setPlayerPointsA(0);
    setPlayerPointsB(0);
    setEntriesCount(0);
  };

  return (
    <View style={styles.pantalla}>
      <View style={styles.marcadorizquierdo}>
        <PlayerText playerName={'Jugador A'} />
        <PlayerPoints points={playerPointsA} setPoints={setPlayerPointsA} entries={entriesCount} />
      </View>
      <View style={styles.marcadorderecho}>
        <PlayerText playerName={'Jugador B'} />
        <PlayerPoints points={playerPointsB} setPoints={setPlayerPointsB} entries={entriesCount}  />
      </View>
      <EntriesCount count={entriesCount} setCount={setEntriesCount} />

      <ResetButton canReset={canReset} onReset={resetAll} />
      <View style={styles.infoButtonPosition}>
        <InfoButton />
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
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
  infoButtonPosition: {
    position: 'absolute',
    bottom: '20@s',
    right: '20@s',
  },
});
