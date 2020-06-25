import React, {Component} from 'react';
import {View} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

class Signin extends Component {
  state = {phone: '', code: ''};

  handleSubmit = async () => {
    const {phone, code} = this.state;

    try {
      let {data} = await axios.post('/verifyoneTimePass', {phone, code});
      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log('Error:', err);
    }
  };

  render() {
    return (
      <View>
        <Text h3>Sign In</Text>
        <Input
          placeholder="Enter Phone Number"
          leftIcon={{type: 'font-awesome', name: 'phone'}}
          value={this.state.phone}
          onChangeText={phone => this.setState({phone})}
        />
        <Input
          placeholder="Enter Your Code"
          leftIcon={{type: 'font-awesome', name: 'hashtag'}}
          value={this.state.code}
          onChangeText={code => this.setState({code})}
        />
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}
export default Signin;
