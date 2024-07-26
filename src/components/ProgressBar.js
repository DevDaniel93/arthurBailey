// src/ProgressBar.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ProgressBar = ({ progress, height, backgroundColor, barColor }) => {
    return (
        <View style={[styles.container, { height, backgroundColor }]}>
            <View style={[styles.progressBar, { width: `${progress}%`, backgroundColor: barColor }]}>
                <Text style={styles.progressText}>{progress}%</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ProgressBar;
