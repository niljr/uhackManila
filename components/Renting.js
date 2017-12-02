import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Renting extends PureComponent {

  goToPackageInfo() {
    null
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.goToPackageInfo} style={styles.rentParent}>
          <View style={styles.rent}>
            <Text><Ionicons name="ios-archive-outline" size={25} color="red" />  Package A</Text>
            <Text>End on: March 3, 2018  <Ionicons name="ios-arrow-round-forward" size={23} color="red" /></Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.goToPackageInfo} style={styles.rentParent}>
          <View style={styles.rent}>
            <Text><Ionicons name="ios-cash-outline" size={20} color="red" />  Hampangan Wallet</Text>
            <Text>Php 3,200.00  <Ionicons name="ios-arrow-round-forward" size={23} color="red"/></Text>
          </View>
        </TouchableOpacity>
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
})