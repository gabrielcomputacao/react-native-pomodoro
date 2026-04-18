import { Pressable, StyleSheet, Text } from "react-native";


export const FocusButton = ({
  textButton,
  onPress,
  icon,
}: {
  textButton: string;
  onPress: () => void;
  icon?: any;
}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      {icon}
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
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    textAlign: 'center',
    
  },
  buttonText: {
    fontSize: 18,
    color: "#021123",
    fontWeight: "bold",
  },
});
