import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from "@rneui/themed";
import Axios from 'axios';
import base64 from 'base-64';


import MyHeader from '../ui_components/header';
import InputBlock from '../ui_components/inputBlock';


export default function Home({ navigation }) {
  // const url = "https://fwsapwd01:44312/sap/opu/odata/sap/Z_AK_NEST_DEF_SRV/AnagraficheSet";
  // const url = "https://fwsapwd01:44312/sap/opu/odata/sap/Z_AK_NEST_DEF_SRV";
  // const url = "https://fwsapwd01:44312/sap/opu/odata/sap/Z_AK_PRENVOLI_SRV";
  const url = "https://developer:Innorg2022@151.0.217.128:44312/sap/opu/odata/sap/Z_AK_PRENVOLI_SRV/z_ak_prenvoli_entitySet('00047220')";
  // const url = "('00047220')";
  // const url = "https://services.odata.org/Experimental/OData/OData.svc/$metadata";
  const username = "developer";
  const password = "Innorg2022";
  const auth = 'Basic ' + base64.encode(username + ":" + password);
 async function fetchData(){
    try {
      // const agent = new https.Agent({rejectUnauthorized: false})
      const respo = await Axios.get(url, {insecureHTTPParser: true})
      console.log(respo)
   } catch (e) {
      console.log(e);
    } 
  }
  fetchData();
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}>
        <MyHeader />
        <InputBlock navigation={navigation} />
        <Button onPress={fetchData}>Clicka!</Button>
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