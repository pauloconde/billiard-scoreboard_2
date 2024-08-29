import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import MinusIcon from './MinusIcon';


export function PlayerPoints({ points, setPoints }) {
    const incrementPoints = () => {
        setPoints(points + 1);
    };

    const decrementPoints = () => {
        setPoints(points > 0 ? points - 1 : 0);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={incrementPoints}>
                <Text style={styles.pointsText}>{points}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={decrementPoints}>
                <MinusIcon color="#888888" />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 0,
    },
    pointsText: {
        fontSize: 180,
        fontWeight: '900',
        marginBottom: 0,
    },
});
