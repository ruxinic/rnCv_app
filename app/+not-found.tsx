import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title: 'Not found!'}} />
    <View style={styles.container}>
      <Link href="/" style={styles.button}>
        Go back... 
      </Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#420330ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    color: 'white',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
  },
});
