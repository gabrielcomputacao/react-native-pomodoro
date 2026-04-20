import { Pressable, StyleSheet, View } from "react-native";
import { IconCheck, IconDelete, IconEdit } from "../Icons";

export default function ItemTask({
  text,
  completed,
  onPressComplete,
  onPressEdit,
  onPressDelete,
}: {
  text: string;
  completed: boolean;
  onPressComplete: () => void;
  onPressEdit: () => void;
  onPressDelete: () => void;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.cardItem}>
        <Pressable
          onPress={onPressComplete}
          style={
            completed
              ? { ...styles.check, ...styles.checkCompleted }
              : { ...styles.check, ...styles.checkDefault }
          }
        >
          <IconCheck />
        </Pressable>
        {text}
      </View>
      <View style={styles.cardItem}>
        <Pressable onPress={onPressEdit} style={styles.edit}>
          <IconEdit />
        </Pressable>
        <Pressable onPress={onPressDelete}>
          <IconDelete />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#98A0A8",
    width: "80%",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
  },
  edit: {
    borderColor: "#222",
    borderRadius: "50%",
    borderWidth: 1,
    padding: 6,
  },
  check: {
    borderRadius: "50%",
    padding: 6,
  },
  checkCompleted: {
    backgroundColor: "#00F4BF",
  },
  checkDefault: {
    backgroundColor: "#fff",
  },
  cardItem: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
