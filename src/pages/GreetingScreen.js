import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableHighlight, Alert, TextInput } from 'react-native';

export class GreetingScreen extends React.Component {
  static navigationOptions = {
    title: 'Greeting Screen',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            ref={(btnLogin) => { this.btnLogin = btnLogin; }}
            style={styles.button}
            underlayColor='#000' >
              <Text style={styles.buttonText}>Do not forget to push your code to GitHub frequently</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
