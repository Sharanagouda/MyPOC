import React from 'react';
import {Text, View, TouchableNativeFeedback} from 'react-native';

import styles from "./../styles/styles";

class Sidebar extends React.Component {
  render() {

    return (
      <View style={styles.sidebarContainer}>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.listViewCont}>
                  <Text>Manifest</Text>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.listViewCont}>
                  <Text>Scan</Text>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.listViewCont}>
                  <Text>Status</Text>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.listViewCont}>
                  <Text>Report</Text>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.listViewCont}>
                  <Text>Help</Text>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.listViewCont}>
                  <Text>Preference</Text>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.listViewCont}>
                  <Text>Network Check</Text>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.listViewCont}>
                  <Text>Refresh Manifest</Text>
              </View>
          </TouchableNativeFeedback>
      </View>
    );
  }
}


export default Sidebar;
