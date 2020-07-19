import PropTypes from 'prop-types';
import React from 'react';
import {
  Image, StyleSheet, Text, View,
} from 'react-native';

const styles = StyleSheet.create({
  bookItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    padding: 5,
    height: 175,
  },
  cover: { flex: 1, height: 150, resizeMode: 'contain' },
  info: {
    flex: 3,
    alignItems: 'flex-end',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 20,
  },
  author: { fontSize: 18 },
  title: { fontSize: 18, fontWeight: 'bold' },
});

function BookItem(props) {
  return (
    <View style={styles.bookItem}>
      <Image
        style={styles.cover}
        source={{ uri: props.coverURL }}
      />
      <View style={styles.info}>
        <Text style={styles.author}>
          {props.author}
        </Text>
        <Text style={styles.title}>
          {props.title}
        </Text>
      </View>
    </View>
  );
}

export default BookItem;

BookItem.propTypes = {
  author: PropTypes.string,
  coverURL: PropTypes.string,
  title: PropTypes.string,
};

BookItem.defaultProps = {
  author: '',
  coverURL: '',
  title: '',
};
