
import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, StyleSheet, Dimensions, Easing } from 'react-native';
import { COLORS } from '../constants';

const RotatingCD = ({ imageSource, play }) => {
    const rotateValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const rotateAnimation = Animated.loop(
            Animated.timing(rotateValue, {
                toValue: 1,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        );
        if (play === true) {

            rotateAnimation.start();
        } else {
            rotateAnimation.stop();
        }

    }, [rotateValue, play]);


    const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.cdContainer, { transform: [{ rotate }] }]}>

                <View style={styles.circle}>
                    <Image source={{ uri: imageSource }} style={styles.cdImage} />
                    <View style={styles.centerCircle} />
                </View>
            </Animated.View>
        </View>
    );
};

const { width } = Dimensions.get('window');
const cdSize = width * 0.6;
const borderWidth = 10;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cdContainer: {
        width: cdSize,
        height: cdSize,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: cdSize,
        height: cdSize,
        borderRadius: cdSize / 2,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cdImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    centerCircle: {
        position: 'absolute',
        width: cdSize / 3,
        height: cdSize / 3,
        borderRadius: (cdSize / 2) / 2,
        backgroundColor: COLORS.primary,
        borderWidth: borderWidth,
        borderColor: 'transparent',
        top: cdSize / 3,
    },
});

export default RotatingCD;
