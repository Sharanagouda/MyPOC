import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import Routes from './config/Routes';
import {connect} from "react-redux";

class Main extends React.Component {
  render() {

    let {app: {loggedIn}} = this.props;

    return (
      <View style={styles.container}>
          <Routes loggedIn={loggedIn} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

mapStateToProps = state => ({
  app: state.app
})

export default connect(mapStateToProps)(Main);
