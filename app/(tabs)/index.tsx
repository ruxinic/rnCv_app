import Button from "@/components/Button";
import IconButton from '@/components/IconButton';
import { StyleSheet, Text, View } from 'react-native';
import { router } from "expo-router";
import { useState } from "react";
import WelcomeModal from "@/components/WelcomeModal";
import BouncingCircleButton from "@/components/BounceCircleButton";
import FunFactModal from "@/components/FunFactModal";
import HomeCard from "@/components/HomeCard";
import React from "react";
import WebsiteModal from "@/components/WebsiteModal"

const img = require("@/assets/images/welcome-illustration-svg-download-png-3231448.png");
const web1 = require("@/assets/images/website1.png")
const web2 = require("@/assets/images/website2.png")
const web3 = require("@/assets/images/website3.png")

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState<boolean>(false);
  const [isWebModalVisible, setIsWebModalVisible] = useState<boolean>(false);

  const onModalClose = () => {
    setIsModalVisible(false);
  }
  const openModal = () => {
    setIsModalVisible(true);
  }

  const onWebModalClose = () => {
    setIsWebModalVisible(false);
  }
  const onWebModalOpen = () => {
    setIsWebModalVisible(true);
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
        <Button label="Check this out!" onPress={onWebModalOpen}/>
        <WebsiteModal visible={isWebModalVisible} onClose={onWebModalClose} imgS1={web1} imgS2={web2} imgS3={web3} />
      </View>

       <View style={styles.footerCont}>
        <Text style={styles.desc}>Press here to learn how to navigate the app:</Text>
        <IconButton onPress={() => router.push("/about_app")} icon="question-mark"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1e7ef',
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
