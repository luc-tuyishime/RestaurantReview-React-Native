import React, {Component} from 'react';
import {Text} from 'react-native';
import HeaderStyle from 'styles/header';

export default class Header extends Component {
  render() {
    return <Text style={HeaderStyle.iosheader}>Restaurant review</Text>;
  }
}
