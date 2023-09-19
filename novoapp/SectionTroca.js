import React, {useState} from 'react'
import {View, StyleSheet, TouchableOpacity, Text, Pressable, Modal, Alert} from "react-native"



export default function SectionTroca() {

    const Modal = () => {
        const [modalVisible, setModalVisible] = useState(false)
    
        return (
    
            <View>
                <Modal
                    animationType="slide"
                    trasparent={true}
                    visible={modalVisible}
                    onRequestClose= { () => {setModalVisible(!modalVisible)}}
                >
    
                    <View>
                        <Text>
                            Olá
                        </Text>
    
                        <Pressable onPress={() => {setModalVisible(!modalVisible)}} >
                            <Text>Fechar</Text>
                        </Pressable>
                    </View>
    
    
    
                </Modal>
    
                
            </View>
        )
    }


    return(

        <View style={styles.sectionContainer}>
            
            <Text style={styles.textInfo}>
                Conheça também nosso sistema de trocas!
            </Text>

            <Text style={styles.textApoio}>
                Aqui você pode encontrar pessoas ou empresas que procuram um produto que você não usa mais.
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => {setModalVisible(!modalVisible)}} >
                <Text style={styles.buttonText}>
                    Faça login
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    sectionContainer:{
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

    textInfo:{
        fontSize: 24,
        textAlign: "center",

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

    textApoio:{
        fontSize: 14,
        textAlign: "center",
    }

})