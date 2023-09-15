import { View, StyleSheet, Image, Text} from "react-native"

export default function Item( item, image ) {
    return(


        <View style={styles.itensContainer}>

        <View style={styles.imageContainer}> 
            <Image
                source={require({image})}
                style={styles.imagemItem}
            />
        </View>
        <Text style={styles.itemText}>
            {item}
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({

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
        marginLeft: -70
    },
})