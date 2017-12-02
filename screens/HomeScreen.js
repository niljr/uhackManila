import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Button,
  Dimensions,
  FlatList
} from 'react-native';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import AgeBracket from '../components/AgeBracket/AgeBracket';
import Toy from '../components/Toy/Toy';
import ageBracket from '../config/ageBracket';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import { packageAge } from '../config/package';
import toys from '../config/toys';
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    toys.push({
      toyCode: 'a12',
      isMore: true
    })
  }

  goTo = () => {
    // this.props.navigation.navigate('PackageScreen');
  }

  goToPackageInfo = () => {
    this.props.navigation.navigate('PackageInfoScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <ScrollView style={[styles.container, {backgroundColor: '#fff'}]}>
          {/* { ageBracket.map(age => <AgeBracket age={age} key={age.ageCode} navigation={this.props.navigation} />)} */}
          <View>
            <Image source={require('../assets/images/gradeSchooler.jpg')} style={styles.image} resizeMode="cover" />
            <View style={styles.overlay}>
              <Image source={require('../assets/images/logo.png')} style={styles.logo} />
              <Ionicons name='md-cart' style={styles.cart} onPress={() => this.props.navigation.navigate('ShoppingCartScreen')}/>
              <View>
                <Text style={styles.paragraph}>DON'T LET TOYS GO TO WASTE</Text>
                <TouchableOpacity style={styles.buttonGreen} onPress={this.goTo}>
                  <Text style={styles.buttonTextWhite}>KNOW MORE</Text>              
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.products}>
            <View style={Layout.containerCentered}>
              <FlatList
                data={toys}
                numColumns={2}
                keyExtractor={(item) => item.toyCode}
                horizontal={false}              
                renderItem={({item}) => (
                  <Toy
                    toyOption={item} 
                    navigation={this.props.navigation} />
                )}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.seeMore}>
            <Text style={{ color: '#808080', fontSize: 20}}>What's the cost? </Text>
            <Text style={{ color: '#000', fontSize: 20 }}>It's a bargain</Text>
          </TouchableOpacity>

          <View style={styles.packageLevel}>
            <TouchableOpacity  style={styles.packageOne} onPress={this.goToPackageInfo}>
              <Image source={require('../assets/images/baby.jpg')} style={{height: height / 3, width: width / 2.04, paddingRight: 5 }}    />
              <Text style={styles.packageTitle}>PACKAGE A</Text>           
              <Text style={styles.packagePrice}>P 999.00</Text>           
            </TouchableOpacity>
            <TouchableOpacity style={styles.packageOne} onPress={this.goToPackageInfo}>
              <Image source={require('../assets/images/toddler.jpg')}  style={{height: height / 3, width: width / 2.1, paddingLeft: 5}}  />           
              <Text style={styles.packageTitle}>PACKAGE B</Text>           
              <Text style={styles.packagePrice}>P 1,399.00</Text>           
            </TouchableOpacity>
          </View>

          <View style={styles.packageLevel}>
            <View  style={styles.packageOne}>
              <Image source={require('../assets/images/preSchool.jpg')} style={{height: height / 3, width: width / 2.04, paddingRight: 5 }}    />
              <Text style={styles.packageTitle}>PACKAGE C</Text>           
              <Text style={styles.packagePrice}>P 1,899.00</Text>           
            </View>
            <View style={styles.packageOne}>
              <Image source={require('../assets/images/gradeSchooler.jpg')}  style={{height: height / 3, width: width / 2.1, paddingLeft: 5}}  />           
              <Text style={styles.packageTitle}>CUSTOMIZE</Text>           
              {/* <Text style={styles.packagePrice}>P 1,399.00</Text>            */}
            </View>
          </View>

          {/* <View>
            <View>
              <Image source={require('../assets/images/gradeSchooler.jpg')} style={styles.image}  resizeMode="center"  />
              <Text style={styles.packageTitle}>PACKAGE A</Text>           
              <Text style={styles.packagePrice}>P 999.00</Text>           
            </View>
          </View> */}

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: height / 2.5,
    width: width
  },
  overlay: {
    ...Layout.positionAbsolute,
    justifyContent: 'space-between'
  },
  logo: {
    width: Layout.window.width * 0.4,
    height: 29,
    alignSelf: 'center',
    marginTop: 30
  },
  title: {
    marginLeft: 20,    
    backgroundColor: 'transparent',
    color: '#FFF',
    fontSize: 20
  },
  paragraph: {
    marginLeft: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontSize: 20,
    width: 150
  },
  buttonGreen: {
    ...Layout.containerCentered,
    marginLeft: 20,
    marginBottom: 40,
    marginTop: 10,
    backgroundColor: Colors.tintColor,
    borderRadius: 50,
    height: 40,
    width: 150,
    borderColor: '#fff',
    borderWidth: 1
  },
  buttonTextWhite: {
    color: '#fff'
  },
  packageLevel: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  packageOne: {
    width: width / 2,
    height: height / 3.1,
    paddingHorizontal: 5,
  },
  packageTitle: {
    position: 'absolute',
    top: 170,
    left: 50,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontSize: 16
  },
  packagePrice: {
    position: 'absolute',
    top: 190,
    left: 60,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontSize: 14
  },
  products: {
    marginTop: 10,
    marginBottom: 10
    // width: Layout.window.width * 0.95,        
  },
  seeMore: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5
  },
  cart: {
    backgroundColor: 'transparent',
    fontSize: 30,
    color: '#fff',
    position: 'absolute',
    top: 25,
    right: 10
  }
});
