import { Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  onPress: () => void;
  label?: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export default function IconButton({ onPress, icon, label }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
        <MaterialIcons name={icon} size={30} color="#c81e1eff" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c83737',
    borderWidth: 2,
    borderRadius: 25,
    width: 43,
    height: 40,
  },
});
