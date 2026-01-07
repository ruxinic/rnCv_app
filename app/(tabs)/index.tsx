import { Text, View, StyleSheet} from 'react-native';
import { Image } from 'expo-image'; 
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";


const ruxiImage = require('@/assets/images/Subject.png');


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer source={ruxiImage} />
        <Text>this is the home page! find something about me! there will be modals with fun facts</Text>
      </View>
      <View style={styles.footerCont}>
        <Button theme="primary" label="Find Out!"/>
        <Button label="Diff button!"/>
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
  footerCont: {
    flex: 1 /3,
    alignItems: 'center',
  },
});
