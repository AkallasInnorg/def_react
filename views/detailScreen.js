import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "@rneui/themed";

export default function DetailScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is the Client View</Text>
            <Button
                buttonStyle={{ borderRadius: 5 }}
                style={styles.button}
                onPress={() => navigation.navigate('Home')}>Home</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'plum',
        marginTop: 0
    },
    button: {
        width: 150,
        alignSelf: 'flex-end',
        paddingRight: 40
    }
})