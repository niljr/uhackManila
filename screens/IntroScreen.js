import React, { Component } from 'react';
import { AppRegistry, Alert, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default class Intro extends Component {
  static navigationOptions = {
    header: null,
  };

  goToLogin = () => {
    this.props.navigation.navigate('WelcomeScreen');
  }

  render() {
    return (
      <Onboarding
        pages={[
          { backgroundColor: '#fff', image: <Image source={require('../assets/images/robot-dev.png')}/>, title: 'Simple Messenger UI', subtitle: 'Implemented in React Native' },
          { backgroundColor: "#fe6e58", image: <Image source={require('../assets/images/robot-dev.png')}/>, title: 'Welcome', subtitle: 'To Earth' },
          { backgroundColor: "#999", image: <Image source={require('../assets/images/robot-dev.png')}/>, title: 'Also', subtitle: 'Mars is nice' },
        ]}
        onSkip={this.goToLogin}
        onDone={this.goToLogin}
      />
    );
  }
}
