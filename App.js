import React from 'react';
import {StyleSheet, View} from 'react-native';
import firebase from 'firebase';

//components
import Signup from './components/Signup';
import Signin from './components/Signin';
//util
import {firebaseConfig} from './util/firebaseConfig';

class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View style={styles.container}>
        <Signup />
        <Signin />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default App;
