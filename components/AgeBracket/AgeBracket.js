import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

class AgeBracket extends Component {
  render() {
    const { age } = this.props;
    return(
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Image source={age.image} style={styles.image} borderRadius={5} />
        <View style={styles.overlay}>
          <Text style={styles.label}>{age.label.toUpperCase()}</Text>
          <Text style={styles.age}>{age.age}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  onPress = () => {
    this.props.navigation.navigate('PackageScreen');
  }
}

export default AgeBracket;