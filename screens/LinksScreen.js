import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  // componentDidMount() {
  //   fetch('https://api-uat.unionbankph.com/partners/sb/sandbox/v1/accounts', {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       "x-ibm-client-id": "a73f4526-9e4d-48e4-99fb-246a482ce106",
  //       "x-ibm-client-secret": "gB8eK3hE4rG6pK6yI1kY0xY2gU6aV1oN3uF1eX2wH8uS4wU8yY"

  //     },
  //     body: JSON.stringify({
  //         "username": "crispina",
  //         "password": "jabat",
  //         "account_name": "Team WIT"
  //     })
  //   })
  //     .then((response) => console.log(response))
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  componentDidMount() {
    fetch('https://api-uat.unionbankph.com/partners/sb/convergent/v1/oauth2/token/grant_type=client_credentials&client_id=a73f4526-9e4d-48e4-99fb-246a482ce106&client_secret=gB8eK3hE4rG6pK6yI1kY0xY2gU6aV1oN3uF1eX2wH8uS4wU8yY&redirect_uri=""&username=""&password=""&refresh_token=""', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        // "x-ibm-client-id": "a73f4526-9e4d-48e4-99fb-246a482ce106",
        // "x-ibm-client-secret": "gB8eK3hE4rG6pK6yI1kY0xY2gU6aV1oN3uF1eX2wH8uS4wU8yY",
        // "x-merchant-id": "2c27bb1b-c55b-4c6c-ad63-8ac62501a8a1",
      },
      body: JSON.stringify({
        "grant_type": "client_credentials",
        "client_id": "a73f4526-9e4d-48e4-99fb-246a482ce106",
        "client_secret":  "gB8eK3hE4rG6pK6yI1kY0xY2gU6aV1oN3uF1eX2wH8uS4wU8yY",
      })
    })
      .then((response) => console.log(response))
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
