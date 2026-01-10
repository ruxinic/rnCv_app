import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { Image } from "expo-image";
import React from 'react';

type Props = {
    visible: boolean;
    onClose: () => void;
    imgSource: any;
};

export default function ImageModal({visible, onClose, imgSource}:Props) { 
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