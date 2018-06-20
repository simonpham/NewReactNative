import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Prompt from 'react-native-prompt-crossplatform';

function updateText(value){
    var space = value.trim();
    if (space==='') return;
    this.setState({text:value})
}
function updateVisible(value, title){
    this.setState({promptVisible:value, promptTitle:title})
}
function reuse(value){

}

export class ProfileScreen extends React.Component {
    constructor() {
        super();
        this.state = {promptVisible:false, promptValue : '', promptTitle : ''}
        updateVisible = updateVisible.bind(this)
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

    }
    render() {
        return (
            <View style = {{flex : 1}}>
                <Prompt
                    title = {'Edit ' + 'Info'}
                    inputPlaceholder = ''
                    isVisible = {this.state.promptVisible}
                    submitButtonText = 'edit'
                    primaryColor = '#4286f4'
                    onCancel = {() => this.setState({promptVisible:false})}
                    onSubmit = {() => {
                        this.setState({promptVisible:false});
                        reuse(this.state.promptValue);
                        reuse = (value) => {};
                    }}
                    onChangeText = {(value) => this.setState({promptValue:value})}
                /> 
                <View style = {styles.avtcontainer}>
                    <Image source = {require('./profileScreen/default-avt.png')} style = {styles.img}/>
                    <Button title = 'Change' onPress = {this._onAvtButtonPressed}/>
                </View>
                <Info name = 'Name'/>
                <Info name = 'Email'/>
                <Info name = 'Phone'/>
                <View style = {{
                    alignItems:'flex-end',
                    paddingEnd : 10,
                    paddingTop : 10}}>
                    <Button  title = 'Save Profile' onPress = {this._onSaveButtonPressed}/>
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
                {/* <View style = {{flex : 4}}>
                    <TextInput
                        style = {{fontSize : 15}}
                        onChange = {(value) => this.setState({text:value})}
                        value = {this.state.text}
                        editable = {false}
                        
                    />
                </View> */}
                <View style = {{flex : 4}}>
                    <Text style = {{fontSize : 15, borderBottomWidth: 1}} >
                        {this.state.text}
                    </Text>
                </View>
                <Icon
                    onPress = {() => {
                        reuse = updateText.bind(this)
                        updateVisible(true,this.state.name);
                    }}
                    style = {{paddingTop:5, paddingStart : 10}}
                    name = 'edit'
                    size = {20}
                />
                
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
