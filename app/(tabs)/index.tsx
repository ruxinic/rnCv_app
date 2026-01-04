import { Text, View, StyleSheet} from 'react-native';
 import { Image } from 'expo-image'; 


const ruxiImage = require('@/assets/images/Subject.png');


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={ruxiImage} style={styles.image} />
        <Text>this is the home page! find something about me! there will be modals with fun facts</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 420,
    height: 310,
    borderRadius: 15,
  },
});
