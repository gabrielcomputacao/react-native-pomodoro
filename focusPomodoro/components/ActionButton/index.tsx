import { Pressable, StyleSheet, Text } from "react-native";

export const ActionButton = ({
  active,
  timer,
  onPress,
}: {
  active: boolean;
  timer: any;
  onPress: () => void;
}) => {
  return (
    <Pressable

      onPress={onPress}
      style={active && styles.contextButtonTextActive}
    >
      <Text style={styles.contextButtonText}>{timer.timerText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contextButtonTextActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  contextButtonText: {
    color: "#fff",
    fontSize: 12.5,
    padding: 8,
  },
});
