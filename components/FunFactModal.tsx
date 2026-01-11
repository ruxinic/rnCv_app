import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { Image } from "expo-image";
import React from 'react';

type Props = {
    visible: boolean;
    onClose: () => void;
    theme?: 'fun'
    theme1?: 'casual'
};

export default function FunModal({visible, onClose, theme1, theme}:Props) { 
  if(theme1 === 'casual'){
    return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContent}>
          <Text>Most of my projects are private on GitHub, as I have to follow my University's policy.</Text>
        </View>
      </Pressable>
    </Modal>
  );

  }
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContent}>
          <Text>Im 21 and i got a cat named Sisoe.</Text>
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