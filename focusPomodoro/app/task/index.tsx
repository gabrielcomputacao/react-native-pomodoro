import { FocusButton } from "@/components/FocusButton";
import ItemTask from "@/components/ItemTask";
import { StyleSheet, Text, View } from "react-native";

export default function Task() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de tarefas:</Text>
      <ItemTask text="testando" completed={false} />
      <ItemTask text="testando" completed={true} />
      <View style={{ width: "80%" }}>
        <FocusButton textButton="Adicionar nova tarefa" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#021123",
    flex: 1,
    alignItems: "center",
    gap: 16,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
  },
});
