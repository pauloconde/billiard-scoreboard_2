import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export function PlayerText({ children }) {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.playertext}>{children}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    playertext: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
})