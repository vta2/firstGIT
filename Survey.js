import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Alert,
  Text,
  Image,
  ScrollView,
  Checkbox,
} from 'react-native';
import PropTypes from 'prop-types';
import { AsyncStorage } from "react-native"
import Fetch from 'react-native-fetch'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import RadioGroup from 'react-native-radio-buttons-group';
export default class App extends React.Component {
  static navigationOptions = {
    header: null
  }
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    required: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
  };

  constructor(props) {
    super(props)
    this.state = {
      selected: {}
    };
  }

  handleOnChange = (data) => {
    let selectedButton = data.find(e => e.selected == true);
    this.setState({ selected: selectedButton });
    const { onChange } = this.props;
    if (!onChange) return;
    onChange(selectedButton);
  }
  state = {
    progress: 20,
    progressWithOnComplete: 0,
    progressCustomized: 0,
  }
    componentDidMount = () => {
      fetch('http://www.mocky.io/v2/5bf61c45300000444b7bc0aa')
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: {responseJson}
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
  // increase = (key, value) => {
  //   this.setState({
  //     [key]: this.state[key] + value,
  //   });
  // }

  render() {
    const barWidth = Dimensions.get('screen').width - 30;
    // const { title, question, options, required } = this.props;
    const progressCustomStyles = {
      backgroundColor: 'red',
      borderRadius: 0,
      borderColor: 'orange',
    };

    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.label}>Listening And Learning Effectively in a Digital World</Text>
            <View style={styles.logoListen}>
              <Image source={require('./images/listenlearn.jpg')}></Image>
            </View>
            <Text style={{ fontWeight: 'bold' }}>Why this is important:</Text><Text style={{ fontWeight: 'italic' }}>The world's information, news, research and media is all online and all searchable using listening tools and customizable news feeds. We can listen to markets, customers, competitors, staff, interests in a very customizable and informative way which forms an important sensing function for the organization.  Setting up the tools and filters, deciding who to follow, how best to follow and how to share are all new skills and habits to form. Listening forms part of a broader lifelong learning approach which we should all have a plan and the discipline to follow.
          </Text>
            <View
              style={{
                borderBottomColor: '#999',
                borderBottomWidth: 1,
              }}
            />
            <View style={styles.surveyformContainer}>
              <Text style={{ fontWeight: 'bold' }}>Contextual Awareness: </Text><Text>Are you committed to being well informed with good contextual awareness of your market?</Text>
              <View>
                <Text style={styles.text}>
                {this.state.data}
                </Text>
                <RadioGroup/>
                {/* <Fetch
                  url="http://www.mocky.io/v2/5bf61c45300000444b7bc0aa"
                  retries={3}
                  timeout={3000}
                  onResponse={async (res) => {
                    const json = await res.json()
                    console.log(json)
                  }}
                  onError={console.error}
                /> */}

              </View>
            </View>
            <ProgressBarAnimated
              width={barWidth}
              value={this.state.progress}
              backgroundColorOnComplete="#6CC644"
            />
            <View style={styles.buttonContainer}>
              <View style={styles.buttonInner}>
                <Button
                  title="NEXT"
                  
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    width: null,  
    height: null,
  },
  buttonContainer: {
    marginTop: 15,
  },
  separator: {
    marginVertical: 30,
    borderWidth: 0.5,
    borderColor: '#DCDCDC',
  },
  label: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center'
  },
  surveyformContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',

  },
  logoListen: {
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    color: 'black'
  },
  text: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    color: 'black'
  },
  required: {
    color: 'red'
  }
});