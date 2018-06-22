import React, { Component } from 'react';
import { View, TextInput,Text, ScrollView,Image,Button, Animated,TouchableOpacity, Keyboard, KeyboardAvoidingView,Platform, StyleSheet } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';

import Form from './Form';

const logo = require('../Logo/hasBrainLogo.png');


class SignUpForm extends Component {

    constructor(props) {
        super(props);
    
        this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
      }
    
      componentWillMount () {
       if (Platform.OS=='ios'){
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
       }else{
        this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
       }
    
      }
    
      componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
      }
    
      keyboardWillShow = (event) => {
        Animated.timing(this.imageHeight, {
          duration: event.duration,
          toValue: IMAGE_HEIGHT_SMALL,
        }).start();
      };
    
      keyboardWillHide = (event) => {
        Animated.timing(this.imageHeight, {
          duration: event.duration,
          toValue: IMAGE_HEIGHT,
        }).start();
      };
    
    
      keyboardDidShow = (event) => {
        Animated.timing(this.imageHeight, {
          toValue: IMAGE_HEIGHT_SMALL,
        }).start();
      };
    
      keyboardDidHide = (event) => {
        Animated.timing(this.imageHeight, {
          toValue: IMAGE_HEIGHT,
        }).start();
      };


    render() {
        return (
            <View style={s.viewStyle}> 
                <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]}/>
                <ScrollView style={{flex:1}}>
                    <KeyboardAvoidingView
                        style={styles.container}
                        behavior="padding"
                    >
                        <Form/>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        
        );
    }
}
const s = StyleSheet.create({
    BackGroundStyle: {
        width: '100%',
        height: '100%',
    },
    viewStyle: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',

    },
});

export default SignUpForm;