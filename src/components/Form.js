import React from 'react';
import { Image, Text, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import Button from './Button';

const { height } = Dimensions.get('window');

const Form = () => {
    const { ImageContainer, container, inputBox } = styles;
    return (
        <View style={container}>
            <TextInput 
            style={inputBox} 
            placeholder="User name"
            placeholderTextColor="#b5b7bc"/>

            <TextInput 
            style={inputBox} 
            placeholder="Email"
            placeholderTextColor="#b5b7bc"/>

            <TextInput 
            style={inputBox} 
            placeholder="Password"
            placeholderTextColor="#b5b7bc"/>

            <TextInput 
            style={inputBox} 
            placeholder="Repeat password"
            placeholderTextColor="#b5b7bc"/>
            
            <Button/>

        </View>
    );
}

const styles = {
    ImageContainer: {
        width: 150,
        height: 150,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 0.02,
    },
    inputBox: {
        width: 300,
        backgroundColor: '#646568',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 16,
        margin: 5,
        color: '#ffffff'
    }
};

export default Form;