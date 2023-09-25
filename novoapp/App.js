import {View, Text, StyleSheet, Image, Pressable, TouchableOpacity} from 'react-native'
import Header from './Header'
import Section from './Section'
import Mapa from './Mapa'
import SectionTroca from './SectionTroca'
import MenuInferior from './MenuInferior'
import { useState } from 'react'

import {FontAwesome} from '@expo/vector-icons'


export default function App (){
  const [active, setActive] = useState("Section")


  return(
    <View style={{ backgroundColor: "#fff", flex: 1 }}  >

      <Header></Header>

      {active === "Section" && <Section></Section>}

      {active === "Mapa" && <Mapa></Mapa>}

      {active === "SectionTroca" && <SectionTroca></SectionTroca>}


      <View style={styles.menuContainer}>
            <TouchableOpacity onPressIn={() => setActive("Section")}>
                <FontAwesome name="user" size={35} color="white" />
            </TouchableOpacity>
            <Pressable onPress={() => setActive("Mapa")}>
                <FontAwesome name="map" size={35} color="white" />
            </Pressable>
            <TouchableOpacity>
                <FontAwesome name='exchange' size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActive("SectionTroca")}>
                <FontAwesome name='exchange' size={35} color="white" />
            </TouchableOpacity>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
  },

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

