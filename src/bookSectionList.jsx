import React, { Component } from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BookItem from './bookItem';
import NYT from './NYT';

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 22 },
  headingText: {
    fontSize: 24,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 2,
  },
});

class BookSectionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [],
    };
  }

  componentDidMount() {
    this._refreshData();
  }

  _addKeysToBooks = (books) => books.map((book) => Object.assign(book, { key: book.title }));

  _refreshData = () => {
    Promise.all([
      NYT.fetchBooks('hardcover-fiction'),
      NYT.fetchBooks('hardcover-nonfiction'),
    ]).then((results) => {
      if (results.length !== 2) {
        console.error('Unexpected results');
      }

      this.setState({
        sections: [
          {
            title: 'Hardcover Fiction',
            data: this._addKeysToBooks(results[0]),
          },
          {
            title: 'Hardcover NonFiction',
            data: this._addKeysToBooks(results[1]),
          },
        ],
      });
    });
  };

  _renderItem = ({ item }) => (
    <BookItem
      coverURL={item.book_image}
      title={item.key}
      author={item.author}
    />
  );

  _renderHeader = ({ section }) => (
    <Text style={styles.headingText}>{section.title}</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.sections}
          renderItem={this._renderItem}
          renderSectionHeader={this._renderHeader}
        />
      </View>
    );
  }
}

export default BookSectionList;
