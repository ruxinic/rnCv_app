import { Text, View } from "react-native";
import Button from "@/components/Button";
import { useState } from "react";
import FunModal from "@/components/FunFactModal";

export default function Projects() {

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  
  const onModalClose = () => {
    setIsModalVisible(false);
  }
  
  const openModal = () => {
    setIsModalVisible(true);
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button label="Disclaimer!" theme1="casual" onPress={openModal}/> 
      <FunModal visible={isModalVisible} onClose={onModalClose} theme1="casual"/>
      <Text>list and info about projects ive done</Text>
    </View>
  );
}
