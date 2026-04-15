import { Pressable, StyleSheet, Text } from "react-native";

export const FocusButton = ({textButton, onPress}: {textButton: string, onPress: () => void}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{textButton}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
});
