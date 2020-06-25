import React, {Component} from 'react';
import {View} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import axios from 'axios';

class Signup extends Component {
  state = {phone: ''};

  handleSubmit = async () => {
    const phone = this.state.phone;

    try {
      await axios.post('/signup', {phone});
      await axios.post('/requestOneTimePass', {phone});
    } catch (err) {
      console.log('Error:', err);
    }
  };

  render() {
    return (
      <View>
        <Text h3>Sign Up</Text>
        <Input
          placeholder="Enter Phone Number"
          leftIcon={{type: 'font-awesome', name: 'phone'}}
          value={this.state.phone}
          onChangeText={phone => this.setState({phone})}
        />
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}
export default Signup;
