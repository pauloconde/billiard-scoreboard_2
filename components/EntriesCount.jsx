import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import MinusIcon from './MinusIcon';
import { ScaledSheet, scale } from 'react-native-size-matters';

export function EntriesCount({ count, setCount }) {
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ENTRADAS</Text>
      <TouchableOpacity onPress={incrementCount} style={styles.touchable}>
        <Text style={styles.countText}>{count}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrementCount}>
                <MinusIcon color="#888888" />
            </TouchableOpacity>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{ translateX: scale(-60) }],
    width: '120@s',
    backgroundColor: '#dddddd',
    alignItems: 'center',
    borderBottomLeftRadius: '16@s', // Radio inferior izquierdo
    borderBottomRightRadius: '16@s', // Radio inferior derecho
    paddingBottom: '10@vs',
    paddingTop: '10@vs', // Añadir algo de padding para espacio adicional
  },
  touchable: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: '16@s',
    fontWeight: '600',
    marginBottom: 0,
  },
  countText: {
    fontSize: '85@s',
    fontWeight: 'bold',
    marginBottom: '5@vs',
  },
});
