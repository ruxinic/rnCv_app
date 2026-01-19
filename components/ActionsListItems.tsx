import { View, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type Props = {
  text: string;
};

export default function ActionItem({ text }: Props) {
  return (
    <View style={styles.row}>
      <MaterialCommunityIcons
        name="asterisk"
        size={15}
        color="#7d1346"
        style={styles.icon}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 4,
  },
  icon: {
    marginTop: 2,
    marginRight: 6,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: "#430830",
  },
});
