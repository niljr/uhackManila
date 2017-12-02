import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

class Package extends Component {
  render() {
    const { packageOption } = this.props;
    return(
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        {/* <Image source={age.image} style={styles.image} borderRadius={5} /> */}
        <View style={styles.overlay}>
          <Text style={styles.label}>{packageOption.name.toUpperCase()}</Text>
          <Text style={styles.age}>{packageOption.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  onPress = () => {
    // this.props.navigation.navigate('PackageScreen');
  }
}

export default Package;