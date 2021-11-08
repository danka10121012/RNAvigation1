import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export function HomeScreen({ route, navigation }) {

    function handleSettingsPress() {

        navigation.navigate("Settings")
    }


    return (


        <View style={styles.container}>

               <View> 
             <Text>Južni Vetar</Text>
            </View>


            <Image style={styles.tinyLogo} source={require("../assets/juzni-vetar-film-1.jpg")} />

            
            <View> 
             <Text>Dune</Text>
            </View>


            <Image style={styles.tinyLogo} source={require("../assets/dune-2.jpg")} />

            <View> 
             <Text>October Sky</Text>
            </View>


            <Image style={styles.tinyLogo} source={require("../assets/dd.jpg")} />


            <Text>HomeScreen</Text>
            <Button title="Go to the setting screen"
                onPress={handleSettingsPress}
            />
        </View>





    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },


    tinyLogo: {

        width: 100,
        height: 100,
    },

    textStyle: {
        fontSize: 10,
        color: "black",
    }
})

