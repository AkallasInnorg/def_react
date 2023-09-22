import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Input, Button } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function InputBlock() {
    return (<><GestureHandlerRootView
        style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 100,
            padding: 20
        }}>
        <Input
            inputMode='numeric'
            style={{ paddingLeft: 30 }}
            leftIcon={{ name: 'qr-code-scanner', color: 'white' }}
            placeholder='inserici Codice Materiale' />
    </GestureHandlerRootView><Button
        ViewComponent={LinearGradient}
        linearGradientProps={{
            colors: ["black", "plum"],
            start: { x: 0, y: 1 },
            end: { x: 0, y: 0.3 }
        }}
        buttonStyle={{ borderRadius: 5 }}
        style={styles.button}
        onPress={() => { }}>Conferma</Button></>)
}

const styles = StyleSheet.create({
    button: {
        width: 150,
        alignSelf: 'flex-end',
        paddingRight: 40
    }
})