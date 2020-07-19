import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  row: {
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
});

class SimpleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { key: 'a' },
        { key: 'b' },
        { key: 'c' },
        { key: 'd' },
        { key: 'a longer example' },
        { key: 'e' },
        { key: 'f' },
        { key: 'g' },
        { key: 'h' },
        { key: 'i' },
        { key: 'j' },
        { key: 'k' },
        { key: 'l' },
        { key: 'm' },
        { key: 'n' },
        { key: 'o' },
        { key: 'p' },
      ],
    };
  }

  _renderItem = ({ item }) => <Text style={styles.row}>{item.key}</Text>;

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

export default SimpleList;
