import { View, Text, StyleSheet} from "react-native"

export default function Header(){

    return(

        <View style={styles.headerContainer}>

            <Text style={styles.logo}>

            Logo EcoTroca
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: "#20a738",
        width: "100%",
    },
    logo:{
        margin: "auto",
        padding: 15,
        fontSize: 30,
    }
})