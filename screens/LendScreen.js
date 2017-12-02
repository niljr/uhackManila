import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar, Image, Dimensions, Button, Alert, TextInput, Picker} from 'react-native';
import { ImagePicker } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import Package from '../components/Package/Package';
import packages from '../config/package';
import color from '../constants/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class LendScreen extends PureComponent {
  static navigationOptions = {
    headerStyle: { backgroundColor: color.tintColor },
    headerTitleStyle: { color: '#fff' },
    // title: "Package A",
  };
  
  state = {
    image: null,
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  renderImage() {
    if (!this.state.image) {
      return (
        <View style={{alignItems: 'center'}}>
          <Ionicons 
            name='ios-camera-outline' 
            size={80} 
            color={color.tintColor} 
            onPress={this._pickImage} 
          />
        </View>
      )
    } 

    goTo = () => {
      this.props.navigation.navigate('HomeScreen');
    }

    return (
      <View style={{alignItems: 'center'}}>
        <Image 
          source={{uri: this.state.image}} 
          style={{ width: 200, height: 200 }} style={styles.image} resizeMode="cover"
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      {/* {this.state.image &&
            <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} style={styles.image} resizeMode="cover" />} */}
        <View>
            {this.renderImage()}
        </View>
        <ScrollView style={styles.container2} contentContainerStyle={styles.contentContainer}>
          <View style={styles.topLevel}>        
            <TextInput style={styles.inputText} placeholder='Product Name' placeholderTextColor='#E8E8E8'/>
            <TextInput style={styles.inputText} placeholder='Product Description' placeholderTextColor='#E8E8E8'/>
            <Picker
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
              <Picker.Item label="For Rent Only" value="rent" />
              <Picker.Item label="For Rent and For Sale" value="rentnsale" />
            </Picker>
            <Picker
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
              <Picker.Item label="Brand New" value="rent" />
              <Picker.Item label="Used" value="rentnsale" />
            </Picker>
            <TextInput style={styles.inputText} placeholder='Price' placeholderTextColor='#E8E8E8'/>
          </View>
        </ScrollView>
          <View style={{backgroundColor: '#4CBE9A', flexDirection: 'row', justifyContent: 'center' }}>
            <Button
              onPress={() => this.props.navigation.navigate('Main')}
              title="SEND"
              color='#FFF'
              accessibilityLabel="Learn more about this purple button"
            />
            <Ionicons name="ios-checkmark-outline" size={32} color="white" />
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
    paddingBottom: 5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop:10,
  },
  inner: {
    padding: 10,
    borderWidth:1,
    borderRadius: 50,
    borderColor: '#BFE7D9'
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
  },
  inputText: {
    height: 50, 
    borderColor: '#E0E0E0', 
    borderBottomWidth: 1,
    fontSize: 18,
    textAlign: 'center',
    
  },
});