import React , { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableHighlight, Alert, TextInput, Image } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';

export class CountDownScreen extends React.Component {
  static navigationOptions = {
    title: 'CountDown Screen',
  };

  constructor(props) {
    super(props);
	this.state = {text: ''};
  }
 _onPressButton() {
    Alert.alert(
		'Greeting from Duy',
		'Hello ' + this.state.text
	)
  }
  render() {
	  const resizeMode = 'cover';
    return (
	 <View style={styles.container}>
        <B />
      </View>
    );
  }
}
class B extends Component {
  state = { isPressed: false }
  render() {
    return (
      <View styles={{ flex: 1 }}>
        <Button
          title={'RESET TIME'}
          onPress={() => { this.setState({ isPressed: true }) }}
        />
        <Timer />
      </View >
    )
  }
}
const Timer = () => (
  <TimerCountdown
    initialSecondsRemaining={1500000}
    onTick={secondsRemaining => console.log('tick', secondsRemaining)}
    onTimeElapsed={() => console.log('complete')}
    allowFontScaling={true}
    style={{ fontSize: 20 }}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
      backgroundColor:'#000000',
      opacity: .5,
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
  },
  editText: {
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    color: "#ffffff"
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button:{
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#ff5722',
    borderRadius:25,
    borderWidth: 1,
    borderColor: '#00000000'
  },
  buttonText:{
      color:'#fff',
      textAlign:'center',
  }
})
