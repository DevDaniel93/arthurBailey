import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler,
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';

import FilterComponent from './FilterComponent';
import { COLORS, SIZES } from '../constants';
import Icon, { IconType } from './Icons';

const SCREEN_WIDTH = 390;
const DRAWER_WIDTH = 300;

const SlidingDrawer = () => {
    const translateX = useSharedValue(SCREEN_WIDTH);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startX = translateX.value;
        },
        onActive: (event, ctx) => {
            translateX.value = ctx.startX + event.translationX;
            if (translateX.value < SCREEN_WIDTH - DRAWER_WIDTH) {
                translateX.value = SCREEN_WIDTH - DRAWER_WIDTH;
            } else if (translateX.value > SCREEN_WIDTH) {
                translateX.value = SCREEN_WIDTH;
            }
        },
        onEnd: (_) => {
            if (translateX.value < SCREEN_WIDTH - DRAWER_WIDTH / 2) {
                translateX.value = withSpring(SCREEN_WIDTH - DRAWER_WIDTH);
            } else {
                translateX.value = withSpring(SCREEN_WIDTH);
            }
        },
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });

    const openDrawer = () => {
        translateX.value = withSpring(SCREEN_WIDTH - DRAWER_WIDTH);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.icon}
                onPress={openDrawer}
            >
                <Icon
                    name={"filter"}
                    type={IconType.AntDesign}
                    color={COLORS.white}
                    size={SIZES.twenty}
                />
            </TouchableOpacity>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.drawer, animatedStyle]}>
                    <FilterComponent />
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    // },
    drawer: {
        position: 'absolute',
        // top: 0,
        bottom: 0,
        right: 0,
        width: DRAWER_WIDTH,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        // padding: 20,
        zIndex: 100,
        backgroundColor: COLORS.red,
        borderWidth: 1
    },
    icon: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 5,
    },
});

export default SlidingDrawer;
