import React from 'react';
import {Text, View, TouchableNativeFeedback,Image, ScrollView} from 'react-native';

import styles from "./../styles/styles";

class Sidebar extends React.Component {
  render() {

    return (
      <ScrollView style={styles.sidebarContainer}>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Manifest</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Scan</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Status</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Report</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Help</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Preferance</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Network Check</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => console.log("touched")}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Refresh Menifest</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.props.logoutUser}>
              <View style={styles.menifestContainer}>
                  <View style={styles.sidebarIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.sidebarIconImage}
                      />
                  </View>
                  <View style={styles.listViewCont}>
                      <Text>Logout</Text>
                  </View>
              </View>
          </TouchableNativeFeedback>
      </ScrollView>
    );
  }
}

export default Sidebar;
