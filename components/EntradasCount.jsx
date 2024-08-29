import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import MinusIcon from './MinusIcon';

export function EntradasCount({ count, setCount }) {
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

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{ translateX: -60 }],
    width: 120,
    backgroundColor: '#dddddd',
    alignItems: 'center',
    borderBottomLeftRadius: 10, // Radio inferior izquierdo
    borderBottomRightRadius: 10, // Radio inferior derecho
    paddingBottom: 10,
    paddingTop: 10, // Añadir algo de padding para espacio adicional
  },
  touchable: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 0,
  },
  countText: {
    fontSize: 80,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
