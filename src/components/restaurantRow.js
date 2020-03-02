import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import Stars from 'components/Stars';

export default class RestaurantRow extends Component {
  state = {
    showInfo: false,
  };

  infoPressed = () => {
    this.setState({showInfo: !this.state.showInfo});
  };

  render() {
    const {place, index} = this.props;
    return (
      <View
        key={place.name}
        style={{backgroundColor: index % 2 === 0 ? 'white' : '#f3f3f7'}}>
        <View style={styles.row}>
          <View style={styles.stars}>
            <Stars rating={place.rating} />
          </View>
          <View style={styles.nameAddress}>
            <Text>{place.name}</Text>
            <Text style={styles.pAddress}>{place.address}</Text>
          </View>
          <View style={styles.edges}>
            <TouchableOpacity onPress={this.infoPressed} style={styles.button}>
              <Text style={styles.buttonText}>Info</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.showInfo && (
          <View style={styles.info}>
            <Text>Restaurant List data</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pAddress: {
    color: 'gray',
  },

  row: {
    flexDirection: 'row',
  },

  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    minWidth: 30,
  },

  stars: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    minWidth: 30,
  },

  nameAddress: {
    flexDirection: 'column',
    flex: 8,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066cc',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
  },

  buttonText: {
    color: '#0066cc',
    fontSize: 12,
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 10,
    borderColor: '#ddd',
    borderRadius: 4,
  },
});
