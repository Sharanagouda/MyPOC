import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux";

import styles from "./../styles/styles";

class Signup extends React.Component {

    goBack = () => {
            Actions.pop()
    }

    register = () => {
        
    }
    
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.logoContainer}>
                <Text style={styles.logoBig}>Laser Ship</Text>	
                <Text style={styles.logoText}>Welcome to My app.</Text>	
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputBox}  
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Name"
                  placeholderTextColor = "#ffffff"
                  />  
              <TextInput style={styles.inputBox} 
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Email"
                  placeholderTextColor = "#ffffff"
                  selectionColor="#fff"
                  keyboardType="email-address"
                  />  
              <TextInput style={styles.inputBox}  
                  underlineColorAndroid='rgba(0,0,0,0)' 
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor = "#ffffff"
                  />  
              <TouchableOpacity style={styles.button} onPress={this.register}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>     
          </View>
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Login</Text></TouchableOpacity>
          </View>
     </View>	
    );
  }
}

mapDispatchToProps = (dispatch) => ({
    loginUser: () => dispatch({type: "LOGIN"})
})

export default connect(null, mapDispatchToProps)(Signup);
