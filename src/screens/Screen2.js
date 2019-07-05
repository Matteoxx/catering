import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class Screen2 extends Component {
    render() {
      return (
        <View>
          <Text>Screen2</Text>
          <Button
            onPress={() => {
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'Map',
                }
              });
            }}
            title="Mapa"
          />
        </View>
   
      )
    }
}