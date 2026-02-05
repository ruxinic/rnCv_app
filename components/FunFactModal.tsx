import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
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
          <Text style={{fontFamily: "Avenir-Medium", fontSize: 16, letterSpacing: 0.5, fontWeight: '400', textAlign: 'center', lineHeight: 24,}}>I enjoy working on everything, from the backend logic to the frontend pixels. 
            Right now, I'm following my curiosity deep into the world of frontend! I'm building projects 
            with React and React Native, and I'm planning on focusing on Tailwind CSS for my next project. 
            I just love the process of bringing web and mobile apps to life!</Text>
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
      backgroundColor: "#fff9fc",
      padding: 23,
      borderRadius: 16,
      width: "70%",
      height: "35%",
      borderWidth: 2,
      borderColor: "#db6abe"
    },
    image: {
      width: "100%",
      height: 350,
    },

})