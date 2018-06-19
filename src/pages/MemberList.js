import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, ImageBackground, TouchableHighlight, Alert, TextInput, ScrollView } from 'react-native';
import FlatListData from '../../data/FlatListData';

class FlatListItem extends React.Component {
  render() {
    return (
      <ScrollView style={{
                flex: 1,
                backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato', 
                margin: 20          
          }}>
        <Text style={{fontSize: 25}}>
          <Text style={{fontWeight: "bold"}}>Name :</Text>
          <Text>{this.props.item.Name}</Text>
        </Text>
        <Text style={{fontSize: 25}}>
          <Text style={{fontWeight: "bold"}}>University :</Text>
          <Text>{this.props.item.University}</Text>
        </Text>
      </ScrollView>
    );
  }
}

export class MemberListScreen extends React.Component {
  static navigationOptions = {
    title: 'List all members',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
                data={FlatListData}
                renderItem={
                  ({item, index})=>{
                    return (
                      <FlatListItem item={item} index={index}>
                      </FlatListItem>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
                >

        </FlatList>
        {/* <Text style={{
            textAlign:'center',
            margin:20,
          }}>• Create a flat list showing name of each member of the team</Text>
        <Text style={{
            textAlign:'center',
            margin:20,
          }}>• Try to give it a good look</Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            ref={(btnLogin) => { this.btnLogin = btnLogin; }}
            style={styles.button}
            underlayColor='#000' >
              <Text style={styles.buttonText}>Do not forget to push your code to GitHub frequently</Text>
          </TouchableHighlight>
        </View> */}
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
