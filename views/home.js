import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import MyHeader from '../ui_components/header';
import InputBlock from '../ui_components/inputBlock';


export default function Home ({ navigation }){
    return (
        <View style={styles.container}> 
        <LinearGradient
              // Background Linear Gradient
              colors={['rgba(0,0,0,0.8)', 'transparent']}
              style={styles.background}>
            <MyHeader/>
            <InputBlock navigation={navigation}/>
        </LinearGradient>
        </View>    
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'space-between',
      backgroundColor: 'plum',
      marginTop: 0
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    }
});