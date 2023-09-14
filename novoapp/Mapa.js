import React from "react"
import MapView from "react-native-maps"
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native"

export default function Mapa() {

    return(

        <View style={styles.mapaContainer}>

            <Text style={styles.textInfo}>
                Veja locais de coleta próximo de você
            </Text>

            <Image 
                source={require("./assets/mapa-img-1.jpg")}
                style={styles.image}
            />

            <MapView style={styles.map}> 

            </MapView>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Ver mapa
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    mapaContainer:{
        padding: 20,
        flexDirection: "column",
        margin: 30,
        gap: 20,
        backgroundColor: "#c2c2c2",
        borderRadius: 10,
        shadowColor: "#171717",
        shadowOffset: {width: -2,  height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },
    image:{
        margin: "auto",
        width: 350,
        height: 250,
    },

    button:{
        padding: 10,
        backgroundColor: "#19B38C",
        borderRadius: 10,
        width: "50%",
        margin: "auto",
    },

    buttonText:{
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
    },

    textInfo:{
        fontSize: 24,
        textAlign: "center",

    },

    map:{
        width: 250,
        height: 250,
    }
})