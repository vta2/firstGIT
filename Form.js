import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Picker,
} from 'react-native'
const { width: WIDTH } = Dimensions.get('window')
export default class Form extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      pickerValue: '',
      firstnameValidate: true,
      lastnameValidate: true,
      emailValidate: true,
      organizationValidate: true,
    };
  }
  validate(text, type) {
    alph = /^[a-zA-Z]+$/
    num = /^[0-9]+$/
    em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (type == 'firstName') {
      if (alph.test(text)) {
        this.setState({
          firstnameValidate: true,
        })
      } else {
        this.setState({
          firstnameValidate: false,
        })
      }
    } else if (type == 'lastName') {
      if (alph.test(text)) {
        this.setState({
          lastnameValidate: true,
        })
      } else {
        this.setState({
          lastnameValidate: false,
        })
      }
    } else if (type == 'email') {
      if (em.test(text)) {
        this.setState({
          emailValidate: true,
        })
      } else {
        this.setState({
          emailValidate: false,
        })
      }
    } else if (type == 'organization') {
      if (alph.test(text)) {
        this.setState({
          organizationValidate: true,
        })
      } else {
        this.setState({
          organizationValidate: false,
        })
      }
    }
  }
  submitEvent = () => {
    const { firstName, lastName, email, organization } = this.state;
    if (firstName == "") {
      this.setState({ Error: '*This field is require.' })
    } else if (lastName == "") {
      this.setState({ Error: '*This field is require.' })
    } else if (email == "") {
      this.setState({ Error: '*This field is require.' })
    } else if (organization == "") {
      this.setState({ Error: '*This field is require.' })
    }
    else {
      this.setState({ Error: 'Submitted form, Thank you!' })
    }
    this.props.navigation.navigate("Survey")
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ marginTop: 20 }}>The information collected is for the sole use of the output of this survey. No data will be sold to third parties or used for marketing purposes.</Text>
          <Text>For further information and to read our Privacy Policy please click here. *</Text>
          <View style={styles.form}>
            <View>
              <Text style={styles.text}> {this.state.Error}First Name</Text>
              <TextInput
                style={[styles.input, !this.state.firstnameValidate ? styles.error : null]}

                placeholder="Enter First Name"
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.validate(text, 'firstName')}
              />
            </View>
            <View>
              <Text style={styles.text}>{this.state.Error}Last Name</Text>
              <TextInput
                style={[styles.input, !this.state.lastnameValidate ? styles.error : null]}
                placeholder="Enter Last Name"
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.validate(text, 'lastName')}
              />
            </View>
            <View>
              <Text style={styles.text}>{this.state.Error}Email Address</Text>
              <TextInput
                style={[styles.input, !this.state.emailValidate ? styles.error : null]}
                placeholder="Enter Email Address"
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid='transparent'
                keyboardType='email-address'
                onChangeText={(text) => this.validate(text, 'email')}
              />
            </View>
            <View>
              <Text style={styles.text}>{this.state.Error}Organization</Text>
              <TextInput
                style={[styles.input, !this.state.organizationValidate ? styles.error : null]}
                placeholder="Enter Organization"
                placeholderTextColor={'rgba(255,255,255,0.7)'}
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.validate(text, 'organization')}
              />

            </View>
            <View>
              <Text style={styles.text}>Seniority</Text>
              <Picker
                style={styles.input}
                selectedValue={this.state.pickerValue}
                onValueChange={(itemValue, itemIndex) => this.setState({ pickerValue: itemValue })}
              >
                <Picker.Item label="-- Please Select --" />
                <Picker.Item label="CXO" value="CXO" />
                <Picker.Item label="VP" value="VP" />
                <Picker.Item label="Director" value="Director" />
                <Picker.Item label="Manager" value="Manager" />
                <Picker.Item label="Senior" value="Senior" />
                <Picker.Item label="Partner" value="Partner" />
                <Picker.Item label="Owner" value="Owner" />
                <Picker.Item label="Entry" value="Entry" />
              </Picker>
            </View>
          </View>
          <TouchableOpacity style={styles.btnSubmit}
              onPress={this.submitEvent}
              >
              <Text style={styles.textSubmit}>SUBMIT</Text>
            </TouchableOpacity>
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
  },
  form: {
    height: 480,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  text: {
    marginTop: 20,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: 'rgba(247, 201, 208, 1)',
    color: 'rgba(255,255,255,0.7)',
    marginTop: 15,
  },
  btnSubmit: {
    width: 150,
    height: 45,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  textSubmit: {
    color: 'rgb(255, 72, 71)',
    fontSize: 16,
    textAlign: 'center',
  },
  error: {
    borderWidth: 3,
    borderColor: 'red'
  }
});