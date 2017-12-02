import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Package from '../components/Package/Package';
import packages from '../config/package';

export default class PackageScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {packages.map(item => (
            <Package
              packageOption={item} 
              key={item.packageCode} 
              navigation={this.props.navigation} />
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  }
});