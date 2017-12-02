import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Layout from '../constants/Layout';
import Toy from './Toy/Toy';
import toys from '../config/toys';

export default class Lending extends PureComponent {
  componentWillMount() {
    toys.pop();
  }
  
  goToPackageInfo() {
    null
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.goToPackageInfo} style={styles.rentParent}>
          <View style={styles.rent}>
            <Text><Ionicons name="ios-american-football-outline" size={25} color="red" />  Total number for Rent:</Text>
            <Text>5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToPackageInfo} style={styles.rentParent}>
          <View style={styles.rent}>
            <Text><Ionicons name="ios-american-football-outline" size={25} color="red" />  Total Active for Rent:</Text>
            <Text>3</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.goToPackageInfo} style={styles.rentParent}>
          <View style={styles.rent}>
            <Text><Ionicons name="ios-cash-outline" size={20} color="red" />  Hampangan Wallet</Text>
            <Text>Php 3,200.00  <Ionicons name="ios-arrow-round-forward" size={23} color="red"/></Text>
          </View>
        </TouchableOpacity>

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

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  rentParent: {
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#e3e3e3',
  },
  rent: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  products: {
    marginTop: 10,
    marginBottom: 10
    // width: Layout.window.width * 0.95,        
  },
})