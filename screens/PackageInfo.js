import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar, Image, Dimensions, Button } from 'react-native';
import Package from '../components/Package/Package';
import packages from '../config/package';
import color from '../constants/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class PackageInfo extends PureComponent {
  static navigationOptions = {
    headerStyle: { backgroundColor: color.tintColor },
    headerTitleStyle: { color: '#fff' },
    title: "Package A",
  };
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
        <Image source={require('../assets/images/gradeSchooler.jpg')} style={styles.image} resizeMode="cover" />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View>        
            <Text style={styles.title}>PACKAGE A</Text>
            <Text style={styles.price}>P 999.00</Text>
          </View>
          <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset s
          </Text>

          <View>
            <View>
              <Text>Toys</Text>
              <Text>4</Text>
            </View>
            <View>
              <Text>Commitments</Text>
              <Text>3 Month</Text>
            </View>
            <View>
              <Text>Shipping</Text>
              <Text>Free</Text>
            </View>
          </View>

          <Button
            // onPress={this.goTo}
            title="Know More"
            color="#FFF"
            accessibilityLabel="Learn more about this purple button"
          />
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
  },
  image: {
    height: height / 2.5,
    width: width
  },
});