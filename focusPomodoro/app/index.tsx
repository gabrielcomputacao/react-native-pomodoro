import { ActionButton } from "@/components/ActionButton";
import { FocusButton } from "@/components/FocusButton";
import { Timer } from "@/components/Timer";
import { useState } from "react";
import { Image,  StyleSheet, Text, View } from "react-native";

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
          {pomodoroType.map((timer) => (
            <ActionButton
            key={timer.id}
              onPress={() => setTimerType(timer)}
              timer={timer}
              active={timerType.id === timer.id}
            />
          ))}
        </View>
        <Timer totalSeconds={timerType.timerValue} />
        <View>
          <FocusButton textButton="Começar" />
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
 
 

  footer: {
    width: "80%",
    alignItems: "center",
  },
  footerText: {
    color: "#98A0A8",
  },
});
