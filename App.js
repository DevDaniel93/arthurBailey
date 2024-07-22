import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from './src/constants/theme'
import LoginAndSignUp from './src/screens/auth/LoginAndSignUp'


const App = () => {
  return (
    <View style={styles.container}>
      <LoginAndSignUp/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundGray
  }
})