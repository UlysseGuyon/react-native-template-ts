import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class App extends React.Component {
  render () {
    return (
      <View style={styles.appBody}>
        <Text>Application ProjectName</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
