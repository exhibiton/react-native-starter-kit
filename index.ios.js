import React from 'react';
import {AppRegistry, StatusBar, View} from 'react-native';
import Header from './src/components/Header';

const App = () => (
  <View>
    <StatusBar
      barStyle='light-content'
    />
    <Header headerText={'Header'}/>
  </View>
);

AppRegistry.registerComponent('albums', () => App);
