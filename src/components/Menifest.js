import React from 'react';
import {Text, View, Image} from 'react-native';

import styles from "./../styles/styles";
import Button from "./Button";

const defaultProps = {
    title: "I am a title",
    subtitle: "I am a subtitle",
    desc: "I am a desc"
}

class Menifest extends React.Component {

    render(){
        return (
          <View>
              <View style={styles.menifestContainer}>
                  <View style={styles.menifestIcon}>
                      <Image
                        source={require('./../assets/randomIcon.png')}
                        style={styles.iconImage}
                      />
                  </View>
                  <View style={styles.menifestTextCont}>
                    <Text style={styles.menifestTitle}>{this.props.title}</Text>
                    <Text style={styles.menifestSubtitle}>{this.props.subtitle}</Text>
                    <Text style={styles.menifestDesc}>{this.props.desc}</Text>
                  </View>
              </View>
              <View style={[styles.menifestContainer, styles.marginHorizontal4px]}>
                  <Button buttonName="Button 1" />
                  <Button buttonName="Button 2"/>
                  <Button buttonName="Button 3"/>
              </View>
          </View>
        )
    }
}

Menifest.defaultProps = defaultProps;

export default Menifest;
