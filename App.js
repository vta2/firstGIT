import React, {Component} from 'react'
import {
  Text, 
  View, 
  StyleSheet,
  TextInput,
  Button,
  Platform,
  Image,
  ImageBackground
} from 'react-native'

import {StackNavigator} from 'react-navigation'
import Home from './Home'
import Welcome from './Welcome'
import Form from './Form'
import Survey from './Survey'
const Navigation = StackNavigator({
  Home:{
    screen:Home,
  },
  Welcome:{
    screen: Welcome,
  },
  Form:{
    screen: Form,
  },
  Survey:{
    screen: Survey,
  },
})
export default Navigation;