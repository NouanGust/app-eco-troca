import {View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import Itens from "./Item"
export default function Section() {

    return(

        <View style={styles.sectionContainer}> 
            
            <Text style={styles.textInfo}>
                Aprenda a descartar seus itens de forma ecológica!
            </Text>

            <View style={ {
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
                width: 250,
                margin: "auto",
                marginBottom: 35,
            }}>

            </View>

            <Itens></Itens>


            <TouchableOpacity style={styles.button}>
                <text style={styles.buttonText}>Ver dicas</text>
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

    itensContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },

    imageContainer:{
        backgroundColor: "#fff",
        borderRadius: "50%",
        shadowColor: "#171717",
        shadowOffset: {width: -2,  height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,

  
    },

    imagemItem:{
        width: 140,
        height: 140,
        
    },

    itemText:{
        textAlignVertical: "center",
        fontSize: 18,
    },


})