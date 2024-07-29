import { Dimensions, FlatList, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import { getChapter } from '../redux/services/book.service';
import { useSelector } from 'react-redux';
import { COLORS, FONTFAMILY, SIZES } from '../../constants';
import CustomButton from '../../components/CustomButton';
import { Icon, IconType } from '../../components';

const { width, height } = Dimensions.get('window');

export default function Chapters(props) {
    const { navigation, route } = props;
    // const { chaptersID } = route?.params;
    // const token = useSelector(state => state.Auth.accessToken);
    const [chapters, setChapters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [chapterIndex, setChapterIndex] = useState(0);
    const [pageIndex, setPageIndex] = useState(0);


    const Header = () => {
        return (
            <View style={styles.row}>
                <TouchableOpacity

                    style={{
                        backgroundColor: COLORS.primary,
                        padding: SIZES.five,
                        borderRadius: SIZES.fifty
                    }}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Icon
                        name={"chevron-back"}
                        type={IconType.Ionicons}
                        color={COLORS.white}
                        size={25}
                    />
                </TouchableOpacity>
                {/* {chapters.length > 0 ?
                    <Text style={styles.title}>
                        Chapter No {chapters[chapterIndex]?.chapter_number}
                    </Text> :
                    <Text style={styles.title}>
                        No Chapter Exists
                    </Text>
                } */}
                <Text style={styles.title}>
                    Chapter 1
                </Text>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("buyItem", { title: "Secrets Of The Rabbi’s Mafia" });
                    }}
                >
                    <Icon
                        name={"list"}
                        type={IconType.Ionicons}
                        color={COLORS.white}
                        size={25}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    const goToPage = () => {
        if (chapters[chapterIndex]?.pages?.length !== pageIndex + 1) {
            setPageIndex((prev) => prev + 1);
        } else if (chapters[chapterIndex]?.pages?.length === pageIndex + 1) {
            setChapterIndex((prev) => prev + 1);
            setPageIndex(0);
        }
    };

    const goToPrevious = () => {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 1);
        } else if (chapterIndex > 0) {
            setChapterIndex(chapterIndex - 1);
            setPageIndex(chapters[chapterIndex - 1].pages.length - 1);
        }
    };

    // const getChapterById = async () => {
    //     try {
    //         setLoading(true);
    //         await getChapter(chaptersID, token).then((res) => {
    //             const filteredChapters = res?.data.filter(chapter =>
    //                 chapter.status === "free" || (chapter.status === "paid" && chapter.purchased)
    //             );
    //             setChapters(filteredChapters);
    //         }).finally(() => {
    //             setLoading(false);
    //         });
    //     } catch (error) {
    //         console.log("ERROR: ", error);
    //     }
    // }

    // useEffect(() => {
    //     getChapterById();
    // }, []);

    const isLastPage = chapters[chapterIndex]?.pages?.length === pageIndex + 1;
    const isLastChapter = chapterIndex === chapters.length - 1;

    return (
        <View style={{ flex: 1, padding: SIZES.twenty }}>

            <Header />
            <View style={styles.line} />
            <View style={styles.line} />

            <Text style={styles.heading}>
                {/* {chapters[chapterIndex]?.title} */}
                Lorem Ipsum
            </Text>
            <View style={{ flex: 1 }}>
                <View style={styles.pageContainer}>
                    {/* <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                        <Text style={styles.content}>
                            {chapters[chapterIndex]?.pages[pageIndex]?.content}
                        </Text>
                    </ScrollView> */}

                    <Text style={styles.content}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        {"\n"} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        {"\n"} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>

                </View>
            </View>

            {/* <View style={{ flexDirection: "row", justifyContent: "center" }}>
                {(pageIndex !== 0 || chapterIndex !== 0) &&
                    <CustomButton
                        text={chapterIndex !== 0 && pageIndex === 0 ? "Previous Chapter" : "Previous Page"}
                        onPress={goToPrevious}
                        width={width * .4}
                        style={styles.customButtonStyle}
                        textStyle={styles.customButtontTextStyle}
                    />
                }

                {(chapters.length > 1 && !isLastChapter && isLastPage) ? (
                    <CustomButton
                        onPress={goToPage}
                        color={COLORS.primary}
                        text="Next Chapter"
                        width={width * .4}
                        style={styles.customButtonStyle}
                        textStyle={styles.customButtontTextStyle}
                    />
                ) : (
                    chapters[chapterIndex]?.pages?.length > 1 && !isLastPage && (
                        <CustomButton
                            onPress={goToPage}
                            color={COLORS.primary}
                            text="Next Page"
                            width={width * .4}
                            style={styles.customButtonStyle}
                            textStyle={styles.customButtontTextStyle}
                        />
                    )
                )}

            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 22
    },
    title: {
        color: COLORS.black,
        fontSize: 22,
        fontWeight: "500",
        fontFamily: FONTFAMILY.RakkasRegular
    },
    line: {
        backgroundColor: COLORS.primary,
        height: 1,
        marginVertical: 3
    },
    heading: {
        fontFamily: FONTFAMILY.QwitcherGrypenBold,
        color: COLORS.black,
        textAlign: "center",
        marginTop: 15,
        fontSize: 30,
        letterSpacing: 3
    },
    content: {
        color: COLORS.black,
        lineHeight: 20,
        marginBottom: 10,
        textAlign: "justify",
        width: "90%"
    },
    customButtontTextStyle: {
        fontWeight: "400"
    },
    customButtonStyle: {
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    pageContainer: {
        flex: 1,
        width: width * .99, // Set the width of each page to the screen width
        height: height, // Set the height of each page to the screen height
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    scrollViewContent: {
        flexGrow: 1,
        // justifyContent: 'center',
        padding: 20,
    }
});
