import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Button,
    Image,
    ImageBackground,
    ScrollView,
    Dimensions,
} from 'react-native'
import logo from './images/wel.png'
export default class Welcome extends Component{
    static navigationOptions ={
        header: null
    }
    render(){
        let screenWidth = Dimensions.get('window').width
        let screenHeight = Dimensions.get('window').height
        return(
            <ScrollView>
            <View style={styles.container}>
                <Text style = {{fontWeight:'bold'}}> Welcome {"\n"} </Text>
                <Text>“The 21st Century Human” is part of our 21st Century Organization framework.
                     Our research has shown that most organizations have sleepwalked into the 21st Century with outdated business models, organization structures, talent, strategies, leadership styles and infrastructures. 
                     We need to reimagine and reinvent our businesses/ government agencies to win in the 21st century.
                     But organizations are only as good as the humans within them. We, the individuals in those organizations, need an ‘executive upgrade’ to become 21st Century Humans.
                    {"\n"}
                </Text>
                <View style = {styles.imageContainer}>
                    <Image source = {require('./images/wel.png')}></Image>
                </View>
                <Text>We identified seven key aspects of the 21st Century Human, and this assessment checks six elements of each aspect, with a total of 42 questions. Each question asks you to score 1-5 for capability. The meanings of scores 1-5 for each question are defined on in the rest of this document {"\n"}{"\n"}As with all assessments, there is a need to quickly approximate your answers, to be ‘really clear and nearly right’ in order to get through this very broad assessment in a manageable amount of time.  The survey itself will take approximately 15 minutes to complete. {"\n"}{"\n"}Under each element, select the most relevant statement that matches your capability. 
                </Text>
           
            <Button title = "LET'S GO!" onPress={()=> this.props.navigation.navigate("Form")}/>
            </View>
            </ScrollView>
        );
     }
} 
const styles=StyleSheet.create({
    container:{
    backgroundColor: 'white',
    flex: 1,
    width:null,
    height:null,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    },
    logo:{
        width:300,
        height: 300
    },
    imageContainer:{
        alignItems: 'center'
    },
    wrapper:{
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});