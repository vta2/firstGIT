import React, {Component} from 'react'
import {
  Text, 
  View, 
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  Button,
} from 'react-native'
import bgImage from './images/background.jpg'
import logo from './images/logo.png'
import Icon from 'react-native-vector-icons/Ionicons'
const{width:WIDTH} = Dimensions.get('window')
export default class login extends React.Component{
  static navigationOptions ={
    header: null
  }
  render(){
    return(
      <ImageBackground source = {bgImage} style = {styles.backgroundContainer}> 
      <View style={styles.LogoContainer}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.logoText}>21st Century Human Survey</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'ios-person'} size = {28} color={'hsla(0, 100%, 50%, 0.3)'}
        style = {styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Please type your email'}
          placeholderTextColor={'rgba(0,0,255,0.3)'}
          underlineColorAndroid='transparent'
        /> 
      </View>

      <View style={styles.inputContainer}>
        <Icon name = {'ios-lock'} size = {28} color={'hsla(0, 100%, 50%, 0.3)'} style={styles.inputIcon}/>
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(0,0,255,0.3)'}
          underlineColorAndroid='transparent'
        /> 
      </View>

       <Button title="Go To Next Step"onPress={()=>this.props.navigation.navigate("Welcome")}/>
      </ImageBackground> 
    );
  }
} 
const styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    width:null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  LogoContainer:{
    alignItems: 'center',
    
  },
  logo:{
    width:300,
    height:150,
  },
  logoText:{
    color: 'rgb(255, 0, 0)',
    fontSize:20,
    fontWeight: '500',
    marginTop: 10,
    opacity:0.6
  },
  input:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft:45,
    backgroundColor: 'rgba(0,0,0.35)',
    color: 'rgba(255,255,255,0,7)',
    marginHorizontal: 25
  },
  inputIcon:{
    position:'absolute',
    top:10,
    left:37,
  },
  inputContainer:{
    marginTop:10
  },
  btnLogin:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25, 
    backgroundColor: 'rgb(255, 72, 71)',
    color: 'rgba(255,255,255,0,7)',
    justifyContent:'center',
    marginTop: 20
  },
  text:{
    fontsize: 16,
    textAlign: 'center',
    color: 'white'
  }
});
