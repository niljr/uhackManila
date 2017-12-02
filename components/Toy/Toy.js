import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

class Toy extends Component {
  render() {
    const { toyOption } = this.props;

    if (toyOption.isMore) {
      return (
        <TouchableOpacity style={styles.moreContainer} onPress={() => this.props.navigation.navigate('ToyListScreen')}>
          <Text style={styles.more}>See More Toys</Text>
        </TouchableOpacity>
      )
    }

    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Image source={toyOption.image} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.label}>{toyOption.name.toUpperCase()}</Text>
          {toyOption.price ? <Text style={styles.price}>PHP {toyOption.price}</Text> : null}
        </View>
      </TouchableOpacity>
    );
  }

  onPress = () => {
    this.props.navigation.navigate('ToyDetailScreen', { toyDetail: this.props.toyOption });
  }
}

export default Toy;