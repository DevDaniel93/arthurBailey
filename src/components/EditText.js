import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon, IconType } from '../components';
import { COLORS } from '../constants';
import { FONTS, height, SIZES, width } from '../constants/theme';

export default function EditText(props) {
    const [enableSecureEntry, setEnableSecureEntry] = useState(true);
    const [focusColor, setFocusColor] = useState(COLORS.charcoalGrey);

    return (
        <View style={[styles.textInputView, props.styleTxtArea]}>
            {props?.label
                &&
                <Text style={[styles.textLabel, props.labelTxtStyle]}>
                    {props.label}
                    {props?.required &&
                        <Text style={styles.required}> *</Text>}
                </Text>
            }
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.textInputArea, { borderColor: focusColor }, props?.inputArea]}>
                    {props.hasIcon ? (
                        <Icon
                            type={props.type}
                            name={props.name}
                            color={props.color}
                            style={{
                                marginRight: SIZES.ten * 0.7,
                                fontSize: SIZES.twenty * 1.3,
                            }}
                        />
                    ) : null}
                    <TextInput
                        {...props}
                        ref={props.ref}
                        multiline={props?.multiline}
                        secureTextEntry={props.password ? enableSecureEntry : false}
                        selectionColor={COLORS.primary}
                        placeholderTextColor={COLORS.gray}
                        placeholder={props?.placeholder}
                        onFocus={() => { setFocusColor(COLORS.primary) }}
                        onBlur={() => { setFocusColor(COLORS.charcoalGrey) }}
                        style={[FONTS.mediumFont14, styles.textInput, props?.style]}
                    />
                    {props.password ? (
                        <TouchableOpacity
                            onPress={() => {
                                setEnableSecureEntry(!enableSecureEntry);
                            }}>
                            <Icon
                                name={enableSecureEntry ? 'eye-slash' : 'eye'}
                                type={IconType.FontAwesome}
                                style={{ fontSize: 20, marginLeft: 5, }}
                            />
                        </TouchableOpacity>
                    ) : null}
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textInputView: {
        justifyContent: 'center',
        marginTop: SIZES.ten,
        borderRadius: Math.sqrt(width + height),
    },
    textInputArea: {
        flex: 1,
        height: SIZES.twentyFive * 2.3,
        padding: SIZES.five,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.backgroundGray,
        borderRadius: SIZES.five,
        paddingHorizontal: SIZES.fifteen
    },
    textInput: {
        flex: 1,
    },
    textLabel: {
        fontFamily: "Poppins",
        fontSize: SIZES.fifteen,
        fontWeight: "500",
        marginBottom: SIZES.ten,
        color: COLORS.defaultTextColor
    },
    required: {
        color: COLORS.red,
    }
});