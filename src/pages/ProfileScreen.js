import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class ProfileScreen extends React.Component {
    constructor() {
        super();
        this.state = { isEditable: "none", buttonTitle: "Edit Profile" }
    }
    static navigationOptions = {
        title: 'Profile',
        headerStyle:{
            backgroundColor: '#4286f4'
        }
    }
    _onAvtButtonPressed() {

    }
    _onSaveButtonPressed() {
      switch (this.state.isEditable) {
        case "none": {
          this.setState({ isEditable: "auto", buttonTitle: "Save Profile" })
          break
        }
        case "auto": {
          this.setState({ isEditable: "none", buttonTitle: "Edit Profile" })
          break
        }
      }
    }
    render() {
        return (
            <View style = {{flex : 1}}>
                <View style = {styles.avtcontainer}>
                    <Image source = {require('./profileScreen/default-avt.png')} style = {styles.img}/>
                    <Button title = 'Change' onPress = {this._onAvtButtonPressed}/>
                </View>
                <View pointerEvents = {this.state.isEditable} >
                  <Info name = 'Name'/>
                  <Info name = 'Email'/>
                  <Info name = 'Phone'/>
                </View>
                <View style = {{
                    alignItems:'flex-end',
                    paddingEnd : 10,
                    paddingTop : 10}}>
                    <Button
                      title = { this.state.buttonTitle }
                      onPress = {this._onSaveButtonPressed.bind(this)}/>
                </View>
            </View>
        )
    }
}

class Info extends React.Component {
    constructor(props) {
        super(props);
        switch (this.props.name) {
            case 'Name':
                this.state = {text:'Nguyen Van A'}
                break;
            case 'Email':
                this.state = {text:'iamA@gmail.com'}
                break;
            case 'Phone':
                this.state = {text:'0123456789'}
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <View style = {styles.infocontainer}>
                <Text style ={{fontSize : 15, flex : 1}}> {this.props.name} </Text>
                <View style = {{flex : 4}}>
                    <TextInput
                        style = {{fontSize : 15}}
                        onChange = {(value) => this.setState({text:value})}
                        value = {this.state.text}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        avtcontainer: {
            justifyContent: 'center',
            alignItems: 'center',
            padding : 10
        },
        infocontainer: {
            flexDirection : 'row',
            alignItems : 'center',
            padding : 10
        },
        img: {
            width: 120,
            height: 120,
            margin : 10
        }
    }
)
