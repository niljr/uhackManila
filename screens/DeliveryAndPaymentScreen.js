import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar, Image, Dimensions, Button, Alert,TextInput,Picker } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Package from '../components/Package/Package';
import packages from '../config/package';
import color from '../constants/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class DeliveryAndPaymentScreen extends PureComponent {
  static navigationOptions = {
    // headerStyle: { backgroundColor: '#FFF' },
    // headerTitleStyle: { color: color.tintColor },
    title: "Delivery and Payment",
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
      <StatusBar barStyle="light-content"/>
        <ScrollView style={styles.container2} contentContainerStyle={styles.contentContainer}>
          <View style={styles.topLevel}>        
           <TextInput style={styles.inputText} placeholder='Full Name' placeholderTextColor='#E8E8E8'/>
          </View>

          <View style={styles.topLevel}>        
            <TextInput style={styles.inputText} placeholder='Shipping Address' placeholderTextColor='#E8E8E8'/>
          </View>

          <Text style={{paddingVertical: 10}}>Card Information</Text>

          <View style={styles.topLevel}>        
            <TextInput style={styles.inputText} placeholder='Card Number' placeholderTextColor='#E8E8E8'/>
          </View>

          <View style={styles.topLevel2}>        
            <TextInput style={styles.inputText} placeholder='MM' placeholderTextColor='#E8E8E8'/>
            <TextInput style={styles.inputText} placeholder='YY' placeholderTextColor='#E8E8E8'/>
          </View>

          <View style={styles.topLevel}>        
            <TextInput style={styles.inputText} placeholder='Card Securty Code' placeholderTextColor='#E8E8E8'/>
          </View>

          {/* <Text>Order Summary</Text>
          <Text>Package A</Text>
          <Text>TOTAL: Php 999.00</Text> */}

          <View >        
            <Text style={{ fontSize: 15 }}>TOTAL: Php 999.00</Text>
          </View>
          
        </ScrollView>
          <View style={{backgroundColor: '#4CBE9A', flexDirection: 'row', justifyContent: 'center' }}>
            <Button
              onPress={this.goTo}
              title="PROCESS CHECKOUT"
              color='#FFF'
              accessibilityLabel="Learn more about this purple button"
            />
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
    paddingHorizontal: 10
  },
  image: {
    height: height / 4.5,
    width: width / 3.8
  },
  topLevel: {
    paddingBottom: 20
  },
  topLevel2: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  },
  inputText: {
    height: 50, 
    borderColor: '#E0E0E0', 
    borderBottomWidth: 1,
    fontSize: 18,
    textAlign: 'center',
  },
});