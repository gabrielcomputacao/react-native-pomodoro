import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste Home</Text>
      <Image source={require("./home.png")} />
      <Link style={styles.buttonNavigation} href={"./pomodoro"}>Quero iniciar!</Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#021123',
        flex: 1,
        alignItems: 'center'
    },
    title:{
        color: '#fff'
    },
    buttonNavigation: {
        color: '#fff'
    }
    
})