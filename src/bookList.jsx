import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import BookItem from './bookItem';
import NYT from './NYT';

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 22 },
});

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this._refreshData();
  }

  _renderItem = ({ item }) => (
    <BookItem
      coverURL={item.book_image}
      title={item.key}
      author={item.author}
    />
  );

  _addKeysToBooks = (books) => books.map((book) => Object.assign(book, { key: book.title }));

  _refreshData = () => {
    NYT.fetchBooks().then((books) => {
      this.setState({ data: this._addKeysToBooks(books) });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default BookList;
