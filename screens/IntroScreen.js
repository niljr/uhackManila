import React, { Component } from 'react';
import { AppRegistry, Alert, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Layout from '../constants/Layout';

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
          { backgroundColor: '#fff', image: <Image source={require('../assets/images/baby1.jpg')}/>, title: 'Everyday playtime', subtitle: 'Fusce purus magna, maximus at pretium quis, convallis a tellus. Vestibulum facilisis aliquam venenatis.' },
          { backgroundColor: "#fff", image: <Image source={require('../assets/images/toddler1.jpg')}/>, title: 'Unlimited choices', subtitle: 'Etiam bibendum a elit sed euismod. Aliquam efficitur mauris urna.' },
          { backgroundColor: "#fff", image: <Image source={require('../assets/images/preSchooler1.jpg')}/>, title: 'So much fun!', subtitle: 'Nunc mattis risus sit amet magna mollis vulputate.' },
        ]}
        onSkip={this.goToLogin}
        onDone={this.goToLogin}
      />
    );
  }
}
