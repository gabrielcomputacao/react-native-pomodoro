import { ActionButton } from "@/components/ActionButton";
import { FocusButton } from "@/components/FocusButton";
import { Footer } from "@/components/Footer";
import { IconPause, IconPlay } from "@/components/Icons";
import { Timer } from "@/components/Timer";
import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const pomodoroType = [
  {
    id: "pomodoro",
    image: require("../assets/images/pomodoro/default.png"),
    timerValue: 25 * 60,
    timerText: "Foco",
  },
  {
    id: "short",
    image: require("../assets/images/pomodoro/short.png"),
    timerValue: 5 * 60,
    timerText: "Pausa curta",
  },
  {
    id: "long",
    image: require("../assets/images/pomodoro/long.png"),
    timerValue: 15 * 60,
    timerText: "Pausa longa",
  },
];

export default function Pomodoro() {
  const [timerType, setTimerType] = useState(pomodoroType[0]);
  const timerRef = useRef<null | number>(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(pomodoroType[0].timerValue);

  const clear = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toggleSetTimerType = (newValueTimerType: any) => {
    setTimerType(newValueTimerType);
    setSeconds(newValueTimerType.timerValue);
    clear();
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }
    const id = setInterval(() => {
      setSeconds((prev) => {
        if (prev == 0) {
          return timerType.timerValue;
        }

        return prev - 1;
      });
    }, 1000);
    timerRef.current = id;
    setTimerRunning(true);
  };

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoroType.map((timer) => (
            <ActionButton
              key={timer.id}
              onPress={() => toggleSetTimerType(timer)}
              timer={timer}
              active={timerType.id === timer.id}
            />
          ))}
        </View>
        <Timer totalSeconds={seconds} />
        <View>
          <FocusButton
            onPress={toggleTimer}
            textButton={timerRunning ? "Pausar" : "Começar"}
            icon={timerRunning ? <IconPause /> : <IconPlay />}
          />
        </View>
      </View>
     <Footer firstText="Desenvolvido por" secondText="Gabriel Henrique" />
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
