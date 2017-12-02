import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar, Image, Dimensions, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Toy from '../components/Toy/Toy';
import toys from '../config/toys';
import color from '../constants/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ToyList extends PureComponent {
  static navigationOptions = {
    // headerStyle: { backgroundColor: color.tintColor },
    title: "Toys",
    headerTitleStyle: { color: color.tintColor },
    headerRight: <Ionicons name="ios-search-outline" size={32} color={color.tintColor}/>
  };

  goTo = () => {
    Alert.alert(
      'Subscribe to',
      'PACKAGE A',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.props.navigation.navigate('PackageScreen')},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
        <ScrollView style={styles.container2} contentContainerStyle={styles.contentContainer}>
        {toys.map(item => (
             <Toy
               toyOption={item} 
               key={item.toyCode} 
               navigation={this.props.navigation} />
           ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingTop: 30,
  },
  image: {
    height: height / 2.5,
    width: width
  },
  topLevel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop:10,
  },
  inner: {
    padding: 10,
    borderWidth:1,
    borderRadius: 50,
    borderColor: '#BFE7D9'
  },
  description: {
    fontWeight: '100'
  },
  bottomLevel: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
  bottomLevelTitle: {
    fontSize: 20,
    fontWeight: '100',
  },
  bottomLevelSubtitle: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    // color: '#E8243C',
  }
});