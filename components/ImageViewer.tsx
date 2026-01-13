import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  imgSource: ImageSourcePropType;
  style? : string
};

export default function ImageViewer({ imgSource, style }: Props) {
  if(style === 'git'){
    return <Image source={imgSource} style={styles.git} />;
  }
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 300,
    borderRadius: 18,
  },
  git: {
    width: 100,
    height: 80,
    borderRadius: 18,
  }
});
