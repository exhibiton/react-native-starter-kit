import React from 'react';
import {Text, View} from 'react-native';

const Header = ({headerText}) => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    color: '#FFF'
  },
  viewStyle: {
    backgroundColor: '#0E7DFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    position: 'relative'
  }
};

export default Header;
