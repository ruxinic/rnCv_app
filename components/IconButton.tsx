import { Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  onPress: () => void;
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export default function IconButton({ onPress, icon, label }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
        <MaterialIcons name={icon} size={30} color="#c81e1eff" />
        <Text style={styles.iconButtonLabel}> {label} </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButtonLabel: {
    color: "#881b7aff",
    marginTop: 12,
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
