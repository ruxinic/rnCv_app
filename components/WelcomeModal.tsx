import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { Image } from "expo-image";

type Props = {
    visible: boolean;
    onClose: () => void;
    imgSource: any;
    imgS1? :any,
    imgS2? : any,
};

export default function ImageModal({visible, onClose, imgSource, imgS1, imgS2}:Props) { 
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContent}>
          <Image source={imgSource} style={styles.image} contentFit="contain" />
          {imgS1 && <Image source={imgS1} style={styles.image} contentFit="contain" />}
          {imgS2 && <Image source={imgS2} style={styles.image} contentFit="contain" />}
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: "rgba(242, 220, 242, 0.6)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 16,
      width: "90%",
    },
    image: {
      width: "100%",
      height: 350,
    },

})