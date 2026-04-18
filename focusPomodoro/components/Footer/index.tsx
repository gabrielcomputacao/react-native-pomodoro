import { StyleSheet, Text, View } from "react-native";

export const Footer = ({firstText, secondText}: {firstText: string, secondText: string }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{firstText}</Text>
      <Text style={styles.footerText}>{secondText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: "80%",
    alignItems: "center",
  },
  footerText: {
    color: "#98A0A8",
    fontSize: 12.5
  },
});
