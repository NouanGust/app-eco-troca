import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable} from "react-native"
import React, {useState} from "react"
import LogoTrasparente from "./assets/logoEcoTrocaTrasparente.png"

import {Ionicons} from "@expo/vector-icons"

export default function Header(){
    const [modalVisible, setModalVisible] = useState(false)

    return(

        <View style={styles.headerContainer}>

<Modal
                animationType="slide"
                trasparent={true}
                visible={modalVisible}
                onRequestClose={ () => {setModalVisible(!modalVisible)} }
            >
                <View style={styles.modal}>

                    <View>
                        Menu
                    </View>


                    <Pressable onPress={ () => {setModalVisible(!modalVisible)} } style={styles.closeModal} >
                        <Text style={styles.closeModalText}>
                            Fechar caixa
                        </Text>
                    </Pressable>
                </View>

            </Modal>

            <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}}>
                <Ionicons name="menu-sharp" size={35} color="white" />
            </TouchableOpacity>

            <Image source={LogoTrasparente} style={styles.logo}>

            </Image>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: "#345924",
        height: 150,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    logo:{
        margin: "auto",
        width: 170,
        height: 100,

    },
    modal:{
        width: "40%",
        direction: "ltr",

    },
})