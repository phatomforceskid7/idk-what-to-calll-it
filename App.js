import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import TransactionScreen from './TransactionScreen';
import SearchScreen from './SearchScreen';

export default class App extends React.Component{
  render(){
    rerurn(
      <AppContainer />
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  Transaction : {screen : TransactionScreen},
  Search : {screen : SearchScreen},
});

const AppConatiner = createAppContainer(TabNavigator);
