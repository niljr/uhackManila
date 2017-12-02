import React, { PureComponent } from 'react';
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Renting from '../components/Renting';
import Lending from '../components/Lending';

export default class ProfileScreen extends PureComponent {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View>
            <Image source={require('../assets/images/backgroundImage3.jpg')} style={styles.profileBackground} />
            <View style={styles.overlay}>
              <Image source={require('../assets/images/profileImage.jpg')} style={styles.profileImage} />
              <View style={{ flex: 1}}>
                <Text style={styles.name}>Maria Santos</Text>
                <Text style={styles.detail}>Jaro, Iloilo</Text>
              </View>
            </View>
          </View>
          <TabNav />
        </ScrollView>
      </View>
    );
  }
}

const TabNav = TabNavigator({
  Renting: {
    screen: Renting,
  },
  Lending: {
    screen: Lending,
  },
},{
  tabBarPosition: 'top',    
  tabBarComponent: TabBarTop,  
  tabBarOptions: {
    style: {
      backgroundColor: Colors.tabBar,
      height: 45
    },
    inactiveTintColor: Colors.tabIconDefault,
    activeTintColor: Colors.tintColor,
    indicatorStyle: {
      backgroundColor: Colors.tintColor
    },
    labelStyle: {
      fontWeight: '600',
      fontSize: 14,
      color: '#808080'
    },
  }  
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileBackground: {
    height: Layout.window.height * 0.2,
    width: Layout.window.width
  },
  overlay: {
    ...Layout.positionAbsolute,
    ...Layout.containerCentered,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingTop: 20
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    borderColor: '#fff',
    borderWidth: 2,
    margin: 20
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500'
  },
  detail: {
    color: '#fff'
  }
});
