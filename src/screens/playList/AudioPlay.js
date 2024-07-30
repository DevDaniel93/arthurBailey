import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTFAMILY, height, SIZES, STYLES, width } from '../../constants'
import { Icon, IconType } from '../../components'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import Stars from 'react-native-stars';
import RotatingCD from '../../components/RotatingCD'
import TrackPlayer, { State, useProgress } from 'react-native-track-player'
import ProgressBar from '../../components/ProgressBar'

const tracks = [
    {
        id: 1,
        url: 'https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
        title: 'Blues Beat',
    },
    {
        id: 2,
        url: 'https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
        title: 'Blues Beat',
    },
];

TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
    compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
    ],
});
export default function AudioPlay(props) {

    const {cdImage} = props?.route?.params
    const { position, duration } = useProgress(1000);
    const [play, setPlay] = useState(false)

    const setUpTrackPlayer = async () => {
        try {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.add(tracks);
            console.log('Tracks added');
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        setUpTrackPlayer();


        return () => TrackPlayer.destroy();
    }, []);



    const formatTime = (seconds) => {
        if (seconds >= 60) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = (seconds % 60).toFixed(2);
            return `${minutes} min ${remainingSeconds} sec`;
        } else {
            return `${seconds.toFixed(2)} sec`;
        }
    };
    const normalizedProgress = duration ? (position / duration) * 10 : 0;
    // const cdImage = image

    const PlayerButton = () => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                <TouchableOpacity
                    onPress={async () => {
                        await TrackPlayer.skipToPrevious();
                    }}
                >
                    <Icon
                        name={"backward-step"}
                        type={IconType.FontAwesome6}
                        color={COLORS.primary}
                        size={SIZES.twentyFive * 1.3}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        name={"rotate-ccw"}
                        type={IconType.Feather}
                        color={COLORS.gray}
                        size={SIZES.twentyFive * 1.2}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={async () => {
                        if (play) {
                            setPlay(!play)
                            TrackPlayer.pause();
                        } else {
                            setPlay(!play)
                            TrackPlayer.play();
                        }

                    }}
                >
                    <Icon
                        name={!play ? "play" : "pause"}
                        type={IconType.AntDesign}
                        color={COLORS.primary}
                        size={SIZES.twentyFive * 2}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        name={"rotate-cw"}
                        type={IconType.Feather}
                        color={COLORS.gray}
                        size={SIZES.twentyFive * 1.2}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={async () => {
                        await TrackPlayer.skipToNext();
                    }}
                >
                    <Icon
                        name={"forward-step"}
                        type={IconType.FontAwesome6}
                        color={COLORS.primary}
                        size={SIZES.twentyFive * 1.3}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles?.headerConatiner}>
                <HeaderWithArrow IconStyle={{ backgroundColor: COLORS.white, }} iconColor={COLORS.black} />
                <RotatingCD imageSource={cdImage} play={play} />
                <View style={{ justifyContent: "flex-end", alignItems: "center", }}>
                    <Text style={styles.heading}>
                        CHAPTER 14
                    </Text>
                    <Text style={styles.Subheading}>
                        CHAPTER 14
                    </Text>
                    <View style={{ alignItems: "center", flexDirection: "row" }}>
                        <Stars
                            display={3}
                            spacing={1}
                            count={5}
                            starSize={SIZES.five}
                            disabled={true}
                            fullStar={<Icon name={'star'} type={IconType.MaterialCommunityIcons} color={COLORS.golden} />}
                            emptyStar={<Icon name={'star-outline'} type={IconType.MaterialCommunityIcons} color={COLORS.golden} />}
                            halfStar={<Icon name={'star-half'} type={IconType.MaterialCommunityIcons} color={COLORS.golden} />}
                        />
                        <Text style={{ marginLeft: SIZES.five, color: COLORS.lightGray, fontSize: SIZES.fifteen }}>
                            55 Rating
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: height * .15 }}>


                <View style={{ justifyContent: "space-between", width: width * .9, flexDirection: "row", marginHorizontal: SIZES.fifteen, marginVertical: SIZES.ten }}>
                    <Text style={styles.time}>{formatTime(position)}</Text>
                    <Text style={styles.time}>{formatTime(duration)}</Text>
                </View>
                <View style={{ marginHorizontal: SIZES.fifteen, width: "100%", justifyContent: 'center' }}>
                    <ProgressBar
                        progress={normalizedProgress}
                        height={SIZES.ten}
                        backgroundColor={COLORS.lightGray}
                        barColor={COLORS.primary}
                    />
                </View>
                <PlayerButton />
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    headerConatiner: {
        height: height * .6,
        width: width,
        padding: SIZES.twenty,
        backgroundColor: COLORS.primary,
        borderBottomLeftRadius: SIZES.fifty * .8,
        borderBottomRightRadius: SIZES.fifty * .8,
    },
    heading: {
        color: COLORS.white,
        fontSize: SIZES.twentyFive,
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
        marginBottom: SIZES.five,
        fontFamily: FONTFAMILY.BebasNeue,
        textTransform: 'uppercase',

    },
    Subheading: {
        color: COLORS.white + 90,
        fontSize: SIZES.fifteen + 2,
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
        marginBottom: SIZES.five,
        fontFamily: FONTFAMILY.BebasNeue,
        textTransform: 'uppercase',
    },
    time: {
        color: COLORS.primary,
        fontWeight: "600",
        fontFamily: FONTFAMILY.Poppins,
        fontSize: 12
    }
})