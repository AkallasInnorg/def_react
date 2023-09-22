import { StyleSheet } from 'react-native';
import {Icon, Header} from '@rneui/themed';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';

export default function MyHeader(){
    return <Header
    containerStyle={
      {borderColor: 'transparent', paddingTop: 40, marginTop: 10}}
    backgroundColor='transparent'
    centerComponent={{text : 'Riepilogo Stock', style: styles.text1}}
    rightComponent={
      <GestureHandlerRootView style={{
        display: 'flex', 
        flexDirection: 'row'}}>
        <TouchableOpacity>
          <Icon name='description' color='white'/>
        </TouchableOpacity>
      </GestureHandlerRootView>}
    leftComponent={
      <GestureHandlerRootView style={{
        display: 'flex', 
        flexDirection: 'row'}}>
          <TouchableOpacity>
          <Icon name='arrow-back' color='white'/>
        </TouchableOpacity>
        </GestureHandlerRootView>}>
    </Header>
}

const styles = StyleSheet.create({
    text1: {
        padding: 0,
        backgroundColor: 'transparent',
        fontSize: 15,
        color: 'white',
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 'auto',
      },
})