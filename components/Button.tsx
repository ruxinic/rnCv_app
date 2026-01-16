import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  theme?: 'primary';
  theme1?: 'casual'
  onPress: () => void;
};

export default function Button({ label, theme, onPress, theme1 }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 3, borderColor: 'rgb(218, 134, 196)', borderRadius: 18 },
        ]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#cfaccaff' }]}
          onPress={onPress}>
          <MaterialCommunityIcons name="cat" size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  if (theme1 === 'casual') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 3, borderColor: '#d9c4caff', borderRadius: 18},
        ]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#cfaccaff' }]}
          onPress={onPress}>
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[styles.buttonContainer, {borderWidth: 3, borderColor: '#b66c9cff', borderRadius:18},]}>
      <Pressable style={styles.button} onPress={() => alert('FUN FACT.')}>
        <Text style={[styles.buttonLabel, {color: '#160213ff'}]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 210,
    height: 35,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 15,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
