import { StyleSheet, Text } from "react-native";

export const Timer = ({ totalSeconds }: { totalSeconds: number }) => {
  const date = new Date(totalSeconds * 1000);

  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString("pt-Br", {
        minute: "2-digit",
        second: "2-digit",
      })}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    color: "#fff",
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "center",
  },
});
