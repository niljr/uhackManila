import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar, Image, Dimensions, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Package from '../components/Package/Package';
import packages from '../config/package';
import color from '../constants/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ToyDetailsScreen extends PureComponent {
  static navigationOptions = {
    headerStyle: { backgroundColor: color.tintColor },
    headerTitleStyle: { color: '#fff' },
    // title: "Package A",
  };

  goTo = () => {
    // Alert.alert(
    //   'Subscribe to',
    //   'PACKAGE A',
    //   [
    //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //     {text: 'Yes', onPress: () => this.props.navigation.navigate('PackageScreen')},
    //   ],
    //   { cancelable: false }
    // )
    
  }

  render() {
    const { toyDetail } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
        <Image source={toyDetail.image} style={styles.image} resizeMode="cover" />
        <ScrollView style={styles.container2} contentContainerStyle={styles.contentContainer}>
          <View style={styles.topLevel}>        
            <Text style={styles.title}>{toyDetail.name}</Text>
            <View style={styles.inner}>
              <Text style={styles.price}>Php {toyDetail.price}.00</Text>
            </View>
          </View>
          <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni.
          </Text>

          <View style={styles.bottomLevel}>
            <View>
              <Text style={styles.bottomLevelTitle}>Age</Text>
              <Text style={styles.bottomLevelSubtitle}><Ionicons name="ios-person-outline" size={20} color={color.tintColor} />3-6</Text>
            </View>
            <View>
              <Text style={styles.bottomLevelTitle}>Ratings</Text>
              <Text style={styles.bottomLevelSubtitle}><Ionicons name="ios-star" size={20} color="yellow" />5</Text>
            </View>
            <View>
              <Text style={styles.bottomLevelTitle}>Available</Text>
              <Text style={styles.bottomLevelSubtitle}><Ionicons name="ios-checkmark" size={20} color="green" />Yes</Text>
            </View>
          </View>
        </ScrollView>
          <View style={{backgroundColor: '#4CBE9A', flexDirection: 'row', justifyContent: 'center' }}>
            <Button
              onPress={this.goTo}
              title="Add to cart"
              color='#FFF'
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
    width: width * 0.7
  },
  inner: {
    padding: 10,
    borderWidth:1,
    borderRadius: 50,
    borderColor: '#BFE7D9',
    height: 40
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