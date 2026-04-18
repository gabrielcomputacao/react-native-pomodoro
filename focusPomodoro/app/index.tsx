import { Image, StyleSheet, Text, View } from "react-native";
import { FocusButton } from "@/components/FocusButton";
import { Footer } from "@/components/Footer";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../assets/images/pomodoro/focuslogo.png")} />
        <View>
          <Text style={styles.title}>Otimize sua{"\n"} produtividade,</Text>
          <Text style={styles.secondTitle}>mergulhe no que {"\n"} importa</Text>
        </View>
        <Image
          style={styles.image}
          source={require("../assets/images/pomodoro/home.png")}
        />
        <View style={{ width: "80%" }}>
          <FocusButton
            textButton="Quero iniciar!"
            // = O Replace reinicia a pilha do stack, então nao tem como voltar
            //onPress={() => router.replace("/pomodoro")}
            onPress={() => router.navigate("/pomodoro")}
          />
        </View>
      </View>
      <View style={{ marginTop: 40 }}>
        <Footer firstText="Desenvolvido por" secondText="Gabriel Henrique" />
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
    width: "100%",
  },
  image: {
    width: 317,
    height: 300,
    objectFit: "cover",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 26,
  },
  secondTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
  },
  buttonNavigation: {
    color: "#fff",
  },
});
