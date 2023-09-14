import {View, Text, StyleSheet, Image} from 'react-native'
import Header from './Header'
import Section from './Section'
import Mapa from './Mapa'
import SectionTroca from './SectionTroca'
export default function App (){

  return(
    <View style={{ backgroundColor: "#fff", flex: 1 }}>

      <Header></Header>

      <Section></Section>

      <Mapa></Mapa>

      <SectionTroca></SectionTroca>

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

})

