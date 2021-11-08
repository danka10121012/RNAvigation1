import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export function SettingsScreen ({route, navigation}){

    function handleHomePress(){
        navigation.navigate("Home")
    }

    return(

<View style={styles.container}>

<Text>Screen</Text>
<Button
title="Go to the HomeScreen"

onPress={handleHomePress}
/>
</View>

    )



}

const styles = StyleSheet.create({
    container: {

        flex: 1,
alignItems: "center",
justifyContent: "center"
    }
    })