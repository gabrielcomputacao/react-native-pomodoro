import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../assets/images/pomodoro/focuslogo.png")} />
        <View>
          <Text style={styles.title}>Otimize sua{"\n"} produtividade,</Text>
          <Text style={styles.title}>mergulhe no que importa</Text>
        </View>
        <Image
          style={styles.image}
          source={require("../assets/images/pomodoro/home.png")}
        />
        <Link style={styles.buttonNavigation} href={"./pomodoro"}>
          Quero iniciar!
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#021123",
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  content: {
    gap: 16,
    alignItems: "center",
  },
  image: {
    width: 317,
    height: 300,
    objectFit: 'cover'
  },
  title: {
    color: "#fff",
    textAlign: 'center'
  },
  buttonNavigation: {
    color: "#fff",
  },
});
