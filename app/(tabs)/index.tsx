import Button from "@/components/Button";
import CircleButton from '@/components/CircleButton';
import IconButton from '@/components/IconButton';
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import WelcomeModal from "@/components/WelcomeModal";
import BouncingCircleButton from "@/components/BounceCircleButton";
import FunFactModal from "@/components/FunFactModal";
import HomeCard from "@/components/HomeCard";

const ruxiImage = require('@/assets/images/Subject.png');
const img = require("@/assets/images/welcome-illustration-svg-download-png-3231448.png");

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  const openModal = () => {
    setIsModalVisible(true);
  }

  const openWelcome = () => {
    setIsWelcomeVisible(true);
  }
  const onWelcomeClose = () => {
    setIsWelcomeVisible(false);
  }
  return (
    <View style={styles.container}>
      <HomeCard/>
      <View style={styles.row}>
        <BouncingCircleButton onPress={openWelcome}/>
        <WelcomeModal visible={isWelcomeVisible} onClose={onWelcomeClose} imgSource={img} />
        <Text style={styles.desc}>Get ready to get to know me!</Text>
      </View>
      <View style={{padding: 20, flex: 1.2, gap: 7}}>
        <Button theme="primary" label="Find Out!" onPress={openModal}/>
        <FunFactModal visible={isModalVisible} onClose={onModalClose} />
        <Button label="Diff button!" onPress={openModal}/>
      </View>
       <View style={styles.footerCont}>
        <Text >Press here to learn how to navigate the app:</Text>
        <IconButton onPress={() => router.push("/about_app")} icon="question-mark"/>
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
  textContainer:{
    flex: 1/2,
    padding: 15,
  },
  footerCont: {
    flex: 1,
    alignItems: 'center',
  },
  desc: {
    fontWeight: "bold",
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',      // vertical alignment
    justifyContent: 'center',  // horizontal alignment
    width: '100%',
    paddingHorizontal: 60,     // smaller padding, scale better on web
    gap: 20,                   // space between button and text (React Native >=0.70)
  },

});
