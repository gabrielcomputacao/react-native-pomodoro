import { Pressable, StyleSheet, Text, View } from "react-native";
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
  onPressComplete?: () => void;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
}) {

  const cardContainer: any = [styles.container]
  if (completed) {
      cardContainer.push(styles.cardCompleted)
  }


  return (
    <View style={cardContainer}>
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
        <Text style={styles.textTask}>{text}</Text>
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
    padding: 6,
  },
  check: {
    borderRadius: "50%",
    padding: 6,
  },
  checkCompleted: {
    backgroundColor: "#00F4BF",
  },
  cardCompleted: {
    backgroundColor: "#0f9175",
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
  textTask: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16
  }
});
