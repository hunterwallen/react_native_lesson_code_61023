/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import MainNav from './src/navigation/MainNav'

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.flex}>
        <StatusBar />
        <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        contentInsetAdjustmentBehavior="automatic">
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Movies Search</Text>
          </View>
          <MainNav />
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'gray',
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 36,
    fontWeight: '800',
  },
  scrollViewContent: {
    flexGrow: 1,
  }
});

export default App;
