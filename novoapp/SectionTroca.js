import {View, StyleSheet, TouchableOpacity, Text} from "react-native"

export default function SectionTroca() {


    return(

        <View style={styles.sectionContainer}>
            
            <Text style={styles.textInfo}>
                Conheça também nosso sistema de trocas!
            </Text>

            <Text style={styles.textApoio}>
                Aqui você pode encontrar pessoas ou empresas que procuram um produto que você não usa mais.
            </Text>

            <TouchableOpacity style={styles.button}>
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