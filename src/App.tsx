import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class App extends React.Component {
  render () {
    return (
      <View style={styles.appBody}>
        <Text>HelloWorld</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appBody: {
    flex: 1
  }
});

export default App;
