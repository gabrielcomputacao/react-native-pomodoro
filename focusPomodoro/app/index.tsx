import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("./default.png")} />
      <View style={styles.actions}>
        <Text style={styles.timer}>25:00</Text>
        <View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Começar</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Desenvolvido por</Text>
        <Text style={styles.footerText}>Gabriel Henrique</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#021123",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  actions: {
    width: "80%",
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#14448080",
    borderColor: "#144480",
    borderWidth: 2,
    borderRadius: 32,
    gap: 32,
  },
  timer: {
    color: "#fff",
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#B872FF",
    padding: 8,
    borderRadius: 32,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#021123",
    fontWeight: "bold",
  },
  footer: {
    width: "80%",
    alignItems: 'center'
  },
  footerText: {
    color: "#98A0A8",
  },
});
