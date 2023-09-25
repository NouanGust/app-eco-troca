import React, { useState } from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Pressable} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import {FontAwesome} from '@expo/vector-icons'
import App from './App'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'

const MenuInferior = ({}) => {
    const [active, setActive] = useState("Section")

    return(

        <View style={styles.menuContainer}>
            <TouchableOpacity>
                <FontAwesome name="user" size={35} color="white" />
            </TouchableOpacity>
            <Pressable onPress={() => App.setActive("Mapa")}>
                <FontAwesome name="map" size={35} color="white" />
            </Pressable>
            <TouchableOpacity>
                <FontAwesome name='exchange' size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome name='exchange' size={35} color="white" />
            </TouchableOpacity>
        </View>
    )
} 

const styles = StyleSheet.create({

    menuContainer:{
        padding: 20,
        margin: "auto",
        width: "100%",
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-between",
        backgroundColor: "#345924",
    }
})

export default MenuInferior