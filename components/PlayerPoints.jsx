import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MinusIcon from './MinusIcon';
import { ScaledSheet } from 'react-native-size-matters';

export function PlayerPoints({ points, setPoints, entries }) {
    const [average, setAverage] = useState(0);

    // Calcula el promedio cada vez que cambian los puntos o las entradas
    useEffect(() => {
        if (entries > 0) {
            setAverage(points / entries);
        } else {
            setAverage(0); // Evita divisiones por cero
        }
    }, [points, entries]);

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
            {entries > 0 && (
                <Text style={styles.averageText}> {average.toFixed(3)}</Text>
            )}
            <TouchableOpacity onPress={decrementPoints}>
                <MinusIcon color="#888888" />
            </TouchableOpacity>
        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 0,
    },
    pointsText: {
        fontSize: '180@s',
        fontWeight: '900',
        marginBottom: 0,
        position: 'relative',
    },
    averageText: {
        fontSize: '17@s',
        fontWeight: '600',
        color: '#222',
        marginTop: '10@vs',
        position: 'absolute',
        top: '175@vs',
        borderWidth: 1,  
        borderColor: '#555',
        borderRadius: '5@s',
        padding: '2@s',
        paddingLeft: '8@s', 
        paddingRight: '8@s', 
    },
});
