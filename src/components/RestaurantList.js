import React, {Component} from 'react';
import {StyleSheet, View, TextInput, FlatList, Image} from 'react-native';
import axios from 'axios';

import Header from 'components/Header';
import RestaurantRow from 'components/restaurantRow';
import ImgagePizza from 'images/pizza.png';

class RestaurantList extends Component {
  state = {
    search: null,
    restaurants: [],
  };

  async componentDidMount() {
    const res = await axios.get('http://localhost:3000/restaurants');
    return await this.setState({restaurants: res.data});
  }
  render() {
    return (
      <>
        <View>
          <View
            style={{
              alignItems: 'center',
              paddingTop: 43,
            }}>
            <Image source={ImgagePizza} />
          </View>
          <Header />
          <TextInput
            placeholder="live search"
            style={styles.input}
            onChangeText={text => {
              this.setState({search: text});
            }}
            value={this.state.search}
          />
          <FlatList
            data={this.state.restaurants.filter(place => {
              return (
                !this.state.search ||
                place.name
                  .toLowerCase()
                  .indexOf(this.state.search.toLowerCase()) > -1
              );
            })}
            renderItem={({item, index}) => (
              <RestaurantRow index={index} place={item} />
            )}
            keyExtractor={item => item.name}
            initialNumToRender={16}
          />
        </View>
      </>
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
  },

  nameAddress: {
    flexDirection: 'column',
    flex: 8,
  },

  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
});

export default RestaurantList;
