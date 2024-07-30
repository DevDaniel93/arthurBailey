import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { COLORS, height, SIZES } from '../constants';
import Icon, { IconType } from './Icons';

const SlidingDrawer = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.icon}
                onPress={() => {

                }}
            >
                <Icon
                    name={"filter"}
                    type={IconType.AntDesign}
                    color={COLORS.white}
                    size={SIZES.twenty}
                />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
