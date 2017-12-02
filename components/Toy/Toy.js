import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

class Toy extends Component {
  render() {
    const { toyOption } = this.props;
    return(
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Image source={toyOption.image} style={styles.image} borderRadius={5} />
        <View style={styles.overlay}>
          <Text style={styles.label}>{toyOption.name.toUpperCase()}</Text>
          <Text style={styles.age}>{toyOption.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  onPress = () => {
    // this.props.navigation.navigate('PackageScreen');
  }
}

export default Toy;