import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar, Image, Dimensions, Button, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Package from '../components/Package/Package';
import packages from '../config/package';
import color from '../constants/Colors';
import Layout from '../constants/Layout';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ShoppingCardScreen extends PureComponent {
  static navigationOptions = {
    // headerStyle: { backgroundColor: '#FFF' },
    // headerTitleStyle: { color: color.tintColor },
    title: "Shopping Cart",
  };

  goTo = () => {
    Alert.alert(
      'Proceed with checkout?',
      'Total amount: PHP 999.00',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.props.navigation.navigate('DeliveryAndPaymentScreen')},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
        <ScrollView style={styles.container2} contentContainerStyle={styles.contentContainer}>
          <View style={styles.topLevel}>        
            <Image source={require('../assets/images/carpenter-tools.jpg')} style={styles.image} resizeMode="cover" />
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.title}>Carpenten Tools</Text>
              <Text style={styles.subTitle}>Php 788.00</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text>-</Text>
            </View>
          </View>

          <View style={styles.topLevel}>        
            <Image source={require('../assets/images/modelhouse.jpg')} style={styles.image} resizeMode="cover" />
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.title}>Wooden Model House</Text>
              <Text style={styles.subTitle}>Php 299.00</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text>-</Text>
            </View>
          </View>

          <View style={styles.topLevel}>        
            <Image source={require('../assets/images/superwhy.jpg')} style={styles.image} resizeMode="cover" />
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.title}>Super Why ABC</Text>
              <Text style={styles.subTitle}>Php 655.00</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text>-</Text>
            </View>
          </View>
          
        </ScrollView>
          <View style={{backgroundColor: '#4CBE9A', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ backgroundColor: color.tabIconDefault, padding: 5}}>
              <Text style={{ fontSize: 9 }}>Total Price</Text>
              <Text style={{ fontSize: 12 }}>PHP 999.00</Text>              
            </View>
            <TouchableOpacity style={[Layout.containerCentered, {flex: 1}]} onPress={this.goTo}>
              <Text style={{color: '#fff'}}>PROCESS CHECKOUT</Text>
            </TouchableOpacity>
          </View>
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
    height: height / 4.5,
    width: width / 3.8
  },
  topLevel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  title: {
    fontSize: 15,
    // fontWeight: 'bold',
    alignItems: 'center'
  },
  subTitle: {
    fontSize: 13,
    fontWeight: '100',
    alignItems: 'center'
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