import React, { PureComponent } from 'react';
import { TouchableOpacity, TextInput, Image, Text, View, Button, StyleSheet } from 'react-native';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

export default class RegisterScreen extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={[Layout.containerCentered, { flex: 1 }]}>
        <Image source={require('../assets/images/backgroundImage3.jpg')} style={styles.backgroundImage}/>
        <View style={[Layout.positionAbsolute, Layout.containerCentered, styles.container]}>
          <View style={styles.header}>
            <Text style={styles.headerText}>register</Text>
          </View>
          <View>
            <TextInput style={styles.inputText} placeholder='username' placeholderTextColor='#E8E8E8'/>
            <TextInput style={styles.inputText} placeholder='email' placeholderTextColor='#E8E8E8'/>
            <TextInput style={styles.inputText} placeholder='password' placeholderTextColor='#E8E8E8'/>
          </View>
          <View style={styles.caption}>
            <TouchableOpacity style={styles.buttonWhite} onPress={() => this.props.navigation.navigate('Main')}>
              <Text style={styles.buttonTextGreen}>SIGN UP</Text>              
            </TouchableOpacity>
            <Text style={[styles.text, {marginTop: 20}]}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
              <Text style={styles.text}>            
                <Text style={styles.underline}>Sign In</Text> here.
              </Text>
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
  header: {
    ...Layout.containerCentered,    
    marginTop: '35%'
  },
  headerText: {
    fontSize: 50,
    color: '#E8E8E8'    
  },
  inputText: {
    height: 50, 
    borderColor: '#E0E0E0', 
    borderBottomWidth: 1,
    fontSize: 18,
    width: Layout.window.width * 0.7,
    textAlign: 'center',
    marginTop: 25
  },
  underline: {
    textDecorationLine: 'underline'
  },
  caption: {
    ...Layout.containerCentered,
    marginBottom: '15%'
  },
  text: {
    color: '#E8E8E8',
    fontSize: 16,
    width: Layout.window.width * 0.7, 
    textAlign: 'center'
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