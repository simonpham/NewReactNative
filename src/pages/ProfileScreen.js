
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Prompt from 'react-native-prompt-crossplatform';
import { CustomizedButton } from './CustomizedButton';


export class ProfileScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            promptVisible:false, 
            promptValue : '', 
            promptTitle : '', 
            promptOldText:'',
            NameInfo : 'Nguyen Van A',
            EmailInfo : 'mr.A@gmail.com',
            PhoneInfo : '0123456789'
        }
    }
    static navigationOptions = {
        title: 'Profile',
        headerStyle:{
            backgroundColor: '#ff5722'
        }
    }
    _onEditPressed(){
        this.setState({promptVisible:false});
        var nospace = this.state.promptValue.trim();
        if (nospace === '') return;
        switch (this.state.promptTitle) {
            case 'Name':
                this.setState({NameInfo:this.state.promptValue})
                break;
            case 'Email':
                this.setState({EmailInfo:this.state.promptValue})
                break;
            case 'Phone':
                this.setState({PhoneInfo:this.state.promptValue})
                break;
            default:
                break;
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
            <View style = {{flex : 1}}
                <Prompt
                    title = {'Editing ' + this.state.promptTitle}
                    inputPlaceholder = ''
                    onBackButtonPress={()=>{
                        this.setState({promptVisible:false, promptValue:''})
                    }}
                    defaultValue = {this.state.promptOldText}
                    isVisible = {this.state.promptVisible}
                    submitButtonText = 'edit'
                    primaryColor = '#ff5722'
                    onCancel = {() => {
                        this.setState({promptVisible:false, promptValue:''})
                    }}
                    onSubmit = {() => {
                        this._onEditPressed();
                    }}
                    onChangeText = {(value) => this.setState({promptValue:value})}
                /> 
                <Info name = 'Name' infotext = {this.state.NameInfo} pressEdit = {() => this.setState({promptVisible:true, promptTitle : 'Name', promptOldText : this.state.NameInfo})}/>
                <Info name = 'Email' infotext = {this.state.EmailInfo} pressEdit = {() => this.setState({promptVisible:true, promptTitle : 'Email', promptOldText : this.state.EmailInfo})}/>
                <Info name = 'Phone' infotext = {this.state.PhoneInfo} pressEdit = {() => this.setState({promptVisible:true, promptTitle : 'Phone', promptOldText : this.state.PhoneInfo})}/>
                <View style = {{
                    alignItems:'flex-end',
                    paddingEnd : 10,
                    paddingTop : 10}}>
                    <CustomizedButton  title = 'Save Profile' onPress = {this._onSaveButtonPressed}/>
                </View>
            </View>
        )
    }
}

class Info extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style = {styles.infocontainer}>
                <Text style ={{fontSize : 15, flex : 1}}> {this.props.name} </Text>
                <View style = {{flex : 4}}>
                    <Text style = {{fontSize : 15, borderBottomWidth: 1}} >
                        {this.props.infotext}
                    </Text>
                </View>
                <Icon
                    onPress = {this.props.pressEdit}
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
