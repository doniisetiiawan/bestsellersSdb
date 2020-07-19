/* eslint-disable react/jsx-filename-extension,react/style-prop-object */
import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar,
} from 'react-native';
import SimpleList from './src/simpleList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <SimpleList />
    </View>
  );
}
