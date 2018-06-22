import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {

    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle}>
                Sign up
            </Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor:'#ff5722',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00000000',
        marginLeft: 5, 
        margin: 20,
    },

    textStyle: {
        alignSelf: 'center',
        color:'#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}
export default Button;