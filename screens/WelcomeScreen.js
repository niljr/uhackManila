import React, { PureComponent } from 'react';
import { TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

export default class WelcomeScreen extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={[Layout.containerCentered, { flex: 1 }]}>
        <Image source={require('../assets/images/backgroundImage.jpg')} style={styles.backgroundImage}/>
        <View style={[Layout.positionAbsolute, Layout.containerCentered, styles.container]}>
          <View style={styles.header}>
            <Text style={styles.text}>welcome to</Text>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          </View>
          <View style={styles.caption}>
            <Text style={[styles.text, { width: Layout.window.width * 0.8, textAlign: 'center'}]}>Hampangan is where you can find affordable quality toys that you and your kid can enjoy.</Text>
            <TouchableOpacity style={styles.buttonWhite} onPress={() => this.props.navigation.navigate('LoginScreen')}>
              <Text style={styles.buttonTextGreen}>ENTER</Text>              
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'transparent', 
    justifyContent: 'space-between'
  },
  backgroundImage: {
    width: Layout.window.width,
    height: Layout.window.height
  },
  logo: {
    width: Layout.window.width * 0.7,
    height: 50
  },
  header: {
    ...Layout.containerCentered,    
    marginTop: '35%'
  },
  caption: {
    ...Layout.containerCentered,
    marginBottom: '15%'
  },
  text: {
    color: '#E8E8E8',
    fontSize: 16,
    marginBottom: 20
  },
  buttonWhite: {
    ...Layout.containerCentered,
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 40,
    width: 200
  },
  buttonTextGreen: {
    color: Colors.tintColor
  }
})