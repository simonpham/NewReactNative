import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableHighlight, Alert, TextInput, Image } from 'react-native';

export class GreetingScreen extends React.Component {
  static navigationOptions = {
    title: 'Greeting Screen',
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
	 <ImageBackground
          style={{backgroundColor: '#000', 
          flex: 1, 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          justifyContent: 'center', }}
          source={{uri: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&h=350'}}
        >
      <View style={styles.container}>
		<Image
          style={{width: 400, height: 300}}
          source={{uri: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/RfeyEzE/welcome-background-video-for-your-next-event_v3mivpftox__F0000.png'}}
        />
        {/* https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/RfeyEzE/welcome-background-video-for-your-next-event_v3mivpftox__F0000.png*/}
		<View style={{padding: 10}}>
        <TextInput
          style={{height: 40, borderColor: 'gray',borderWidth: 1, color : "blue", textAlign: 'center'
			}}
          placeholder="Type your name in here please"
          onChangeText={(text) => this.setState({text})}
        />
		</View>
        <View style={styles.buttonContainer}>
		
          <TouchableHighlight
            style={styles.button}
			 onPress={this._onPressButton.bind(this)}
            underlayColor='#000' >
              <Text style={styles.buttonText}>Welcome to Front End team :D </Text>
			 
          </TouchableHighlight>
        </View>
      </View>
	  </ImageBackground> 
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
