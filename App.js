import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PlayerText } from './components/PlayerText';

export default function App() {
  return (
    <View style={styles.pantalla}>
      <View style={styles.marcadorizquierdo}>
        <PlayerText playerName={'Jugador AA'}></PlayerText>
      </View>
      <View style={styles.marcadorderecho}>
        <PlayerText playerName={'Jugador BB'}></PlayerText>
      </View>
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
    backgroundColor: '#F2C95F',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
