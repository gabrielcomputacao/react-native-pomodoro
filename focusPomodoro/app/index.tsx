import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const pomodoroType = [
  {
    id: "pomodoro",
    image: require("./default.png"),
    timerValue: 25,
    timerText: "Foco",
  },
  {
    id: "short",
    image: require("./short.png"),
    timerValue: 5,
    timerText: "Pausa curta",
  },
  {
    id: "long",
    image: require("./long.png"),
    timerValue: 15,
    timerText: "Pausa longa",
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoroType[0]);

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoroType.map((timer, index) => (
            <Pressable
              key={index}
              onPress={() => setTimerType(timer)}
              style={
                timerType.id === pomodoroType[index].id &&
                styles.contextButtonTextActive
              }
            >
              <Text style={styles.contextButtonText}>{timer.timerText}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.timer}>
          {new Date(timerType.timerValue * 1000).toLocaleTimeString("pt-Br", {
            minute: "2-digit",
            second: "2-digit",
          })}
        </Text>
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
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contextButtonTextActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  contextButtonText: {
    color: "#fff",
    fontSize: 12.5,
    padding: 8,
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
    alignItems: "center",
  },
  footerText: {
    color: "#98A0A8",
  },
});
