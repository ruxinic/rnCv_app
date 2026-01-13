import { Text, View, Pressable, Linking, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { useState } from "react";
import FunModal from "@/components/FunFactModal";
import ImageViewer from "@/components/ImageViewer";

export default function Projects() {

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const url = 'https://github.com/ruxinic';
  const gitImg = require('@/assets/images/gitpic1.png');

  const openLink = async () => {
    const opened_link = await Linking.canOpenURL(url);
    if(opened_link){
      await Linking.openURL(url);
    }
    else {
      console.warn("Cannot open link");
    }
  }
  
  const onModalClose = () => {
    setIsModalVisible(false);
  }
  
  const openModal = () => {
    setIsModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <ImageViewer imgSource={gitImg} style="git" />
        <Pressable onPress={openLink} style={styles.textContainer}>
          <Text style={styles.textStyle}>My GitHub profile!</Text>
        </Pressable>
      </View>

      <View style={styles.middleSection}>
        <Button
          label="Disclaimer!"
          theme1="casual"
          onPress={openModal}
        />
        <FunModal
        visible={isModalVisible}
        onClose={onModalClose}
        theme1="casual"
      />

      </View>
      <Text style={{ textAlign: 'center', marginBottom: 40 }}>
        list and info about projects ive done
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topSection: {
    alignItems: 'center',
    marginTop: 30,
  },

  textContainer: {
    padding: 10,
  },

  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
