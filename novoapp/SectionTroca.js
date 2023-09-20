import React, {useState} from 'react'
import {View, StyleSheet, TouchableOpacity, Text, Pressable, Modal, TextInput} from "react-native"

export default function SectionTroca() {
    const [modalVisible, setModalVisible] = useState(false)

    return(



        <View style={styles.sectionContainer}>


            <Modal
                animationType="slide"
                trasparent={true}
                visible={modalVisible}
                onRequestClose={ () => {setModalVisible(!modalVisible)} }
            >
                <View style={styles.modal}>

                    <Text style={styles.modalText}>
                        Faça login para entrar na área de troca!
                    </Text>

                    <View>

                        <TextInput
                            style={styles.userInput}
                            placeholder='Nome de usuário ou email'
                        >
                        </TextInput>
                        <TextInput
                            style={styles.userInput}
                            placeholder='Senha'
                            secureTextEntry={true}
                        >
                        </TextInput>
                        <Pressable style={styles.loginBtn}>
                            <Text style={styles.loginBtnText}>
                                Login
                            </Text>
                        </Pressable>
                    </View>


                    <Pressable onPress={ () => {setModalVisible(!modalVisible)} } style={styles.closeModal} >
                        <Text style={styles.closeModalText}>
                            Fechar caixa
                        </Text>
                    </Pressable>
                </View>

            </Modal>

            
            <Text style={styles.textInfo}>
                Conheça também nosso sistema de trocas!
            </Text>

            <Text style={styles.textApoio}>
                Aqui você pode encontrar pessoas ou empresas que procuram um produto que você não usa mais.
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => {setModalVisible(!modalVisible)}}>
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
    },

    modal:{
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        margin: 20,
        

    },

    modalText:{
        fontSize: 21,
        textAlign: 'center',

    },

    closeModal:{
        padding: 10,
        backgroundColor: "red",
        borderRadius: 10,
        margin: 30,
    },

    closeModalText:{
        color: "#fff",
        fontWeight: "bold",
    },

    userInput:{
        height: 40,
        width: 280,
        margin: 12,
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    loginBtn:{
        backgroundColor: "#20a738",
        padding: 15,
        borderRadius: 20,
        width: 260,
        margin: "auto"

    },

    loginBtnText:{
        textAlign: "center",
        fontSize: 14,
        color: "#fff",
        fontWeight: 'bold',
    }

})