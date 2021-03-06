/* eslint-disable react/jsx-filename-extension,react/style-prop-object */
import React from 'react';
import {
  Platform, StatusBar, StyleSheet, View,
} from 'react-native';
import BookSectionList from './src/bookSectionList';

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
      <BookSectionList />
    </View>
  );
}
