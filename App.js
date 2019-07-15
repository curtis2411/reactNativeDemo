import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Platform, Text, View, Button} from 'react-native';
import Torch from 'react-native-torch';

import RNSpeedometer from 'react-native-speedometer'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      isTorchOn: false,
    };
  }

  onChange = (value) => this.setState({ value: parseInt(value) });

  handlePress() {
    const { isTorchOn } = this.state;
    Torch.switchState(!isTorchOn);
    this.setState({ isTorchOn: !isTorchOn });
  }

  render() {
     return (
        <SafeAreaView style={styles.container}>
          <TextInput placeholder="Enter a value" onChangeText={this.onChange} style={styles.textInput} />
          <RNSpeedometer value={this.state.value} size={200}/>

          <Text style={styles.welcome}>
            Hell yeah! Let's start the torch
          </Text>
          <Button
            onPress={this.handlePress.bind(this)}
            title={this.state.isTorchOn ? "Turn off the Torch" : "Turn on the Torch"}
          />
        </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
    height: 25,
    fontSize: 26,
    marginVertical: 50,
    marginHorizontal: 20,
    color: 'black'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50,
  }
});

export default App;
