import Button from "@/components/Button";
import CircleButton from '@/components/CircleButton';
import IconButton from '@/components/IconButton';
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import WelcomeModal from "@/components/WelcomeModal";
import BouncingCircleButton from "@/components/BounceCircleButton";


const ruxiImage = require('@/assets/images/Subject.png');
const img = require("@/assets/images/welcome-illustration-svg-download-png-3231448.png");

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  const openModal = () => {
    setIsModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={ruxiImage} />
      </View>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle1}>Hello there!</Text>
          <Text>Welcome to Ruxandra's CV app!</Text>
          <Text>Get ready to get to know me!</Text>
        </View>
        <BouncingCircleButton onPress={openModal}/>
        <WelcomeModal visible={isModalVisible} onClose={onModalClose} imgSource={img} />
      </View>
      <View style={styles.textContainer}>
        <Text>Press here to learn how to navigate the app:</Text>
        <IconButton label="" onPress={() => router.push("/about_app")} icon="question-mark"/>
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
    flex: 3,
    alignItems: 'center',
    paddingTop: 5,
  },
  textStyle1:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  textStyle2:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  textStyleNormal:{
    fontSize: 40,
    fontWeight: 'bold',
  },
  textContainer:{
    flex: 1,
    padding: 20,
  },
  footerCont: {
    flex: 1.3,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',    
    paddingHorizontal: 60,
  },
});
