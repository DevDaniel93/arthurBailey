// import React, { useEffect, useState } from 'react'
// import { LogBox, SafeAreaView, StyleSheet } from 'react-native'
// import { COLORS, IMAGES } from './src/constants/theme'
// import MainNavigation from './src/navigation/MainNavigation'
// import { AnimatedSplash } from './src/components'


// const App = () => {

//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     LogBox.ignoreAllLogs();
//     setTimeout(() => {
//       setIsLoaded(true);
//     }, 1500);
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <AnimatedSplash
//        translucent={true}
//       isLoaded={isLoaded}
//         logoImage={IMAGES.logo}
//         backgroundColor={COLORS.primary}
//         logoWidth={316}
//         logoHeight={117}
//       >
//         <MainNavigation />
//       </AnimatedSplash>
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.backgroundGray
//   }
// })
import NetInfo from '@react-native-community/netinfo';
import React, { useEffect, useState } from 'react';
import {
  LogBox,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { AnimatedSplash, Icon, IconType } from './src/components';
import { COLORS, FONTS, IMAGES, SIZES } from './src/constants';
import MainNavigation from './src/navigation/MainNavigation';
import { store } from './src/redux/store';


const App = () => {
  const [networkState, setNetworkState] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    LogBox.ignoreAllLogs();
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(async state => {
      // console.log('Connection status: ', state);

      setTimeout(() => {
        setNetworkState(state.isInternetReachable);
      }, 1000);
    });

    return () => unsubscribe();
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>

      <StatusBar
        backgroundColor={COLORS.transparent}
        translucent
        barStyle={"dark-content"}
      />
      <AnimatedSplash
        translucent={true}
        isLoaded={isLoaded}
        logoImage={IMAGES.logo}
        backgroundColor={COLORS.primary}
        logoHeight={SIZES.fifty * 4}
        logoWidth={SIZES.fifty * 4}>


        {networkState ? (
          <Provider store={store}>
            <MainNavigation />
          </Provider>
        ) : (

          <View style={styles.noInternetView}>
            <View style={styles.imgStyle}>
              <Icon
                name={'wifi-off'}
                type={IconType.Feather}
                size={SIZES.fifty * 1.75}
                color={COLORS.primary}
              />
            </View>
            <Text style={[FONTS.boldFont22, styles.headingStyle]}>
              No Internet
            </Text>
            <Text style={[FONTS.boldFont22, styles.headingStyle]}>
              Connection Available
            </Text>
            <View style={{ marginTop: SIZES.twenty }}>
              <Text style={[FONTS.mediumFont14, styles.textStyle]}>
                Your device is not connected to internet
              </Text>
              <Text style={[FONTS.mediumFont14, styles.textStyle]}>
                Please make sure your connection is working
              </Text>
            </View>
          </View>
        )}
      </AnimatedSplash>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,

  },
  noInternetView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.twentyFive,
  },
  imgStyle: {
    marginBottom: SIZES.twentyFive,
  },
  textStyle: {
    textAlign: 'center',
    color: COLORS.textGrey,
  },
  headingStyle: {
    color: COLORS.primary,
  },
});

export default App;
