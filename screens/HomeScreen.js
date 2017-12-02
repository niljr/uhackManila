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
} from 'react-native';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import AgeBracket from '../components/AgeBracket/AgeBracket';
import ageBracket from '../config/ageBracket';
import Layout from '../constants/Layout';
import { packageAge } from '../config/package';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  goTo = () => {
    this.props.navigation.navigate('PackageScreen');
  }

  goToPackageInfo = () => {
    this.props.navigation.navigate('PackageInfoScreen');
  }

  render() {
    return (
      <View style={styles.container}>
       <StatusBar barStyle="light-content"/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {/* { ageBracket.map(age => <AgeBracket age={age} key={age.ageCode} navigation={this.props.navigation} />)} */}
          <Image source={require('../assets/images/gradeSchooler.jpg')} style={styles.image} resizeMode="cover" />
          <View style={styles.overlay}>
            <Text style={styles.title}>Hampangan</Text>
            <View style={styles.overlay}>
              <Text style={styles.paragraph}>DON'T LET TOYS GO TO WASTE</Text>
              <View style={styles.subscribe}>
              <Button
                onPress={this.goTo}
                title="Know More"
                color="#FFF"
                accessibilityLabel="Learn more about this purple button"
              />
              </View>
            </View>
          </View>

          <View style={styles.packageLevel}>
            <TouchableOpacity  style={styles.packageOne} onPress={this.goToPackageInfo}>
              <Image source={require('../assets/images/preSchool.jpg')} style={{height: height / 3, width: width / 2.04, paddingRight: 5 }}    />
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
              <Image source={require('../assets/images/toddler.jpg')}  style={{height: height / 3, width: width / 2.1, paddingLeft: 5}}  />           
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
    position: 'absolute',
  },
  title: {
    position: 'absolute',
    top: 50,
    left: 140,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontSize: 20
  },
  paragraph: {
    top: 100,
    left: 30,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontSize: 20,
    width: 150
  },
  subscribe: {
    top: 110,
    left: 30,
    backgroundColor: '#4CBE9A'
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
  }
});
