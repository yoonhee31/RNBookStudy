import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props) {
  return (
    <View>
      <Text>안녕하세요!!{props.name}</Text>
    </View>
  );
}

Greeting.DefaultProps = {
  name: '래익트네이티브',
};

export default Greeting;
