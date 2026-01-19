import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ActionItem from "./ActionsListItems";
import Button from "./Button";
import { router } from "expo-router";

type Props = {
    title: string;
    desc: string;
    action1: string;
    action2?: string;
    action3?: string;
    action4?: string;
    onpress?: () => void;
};


export default function AboutCard({title, desc, action1, action2, action3, action4, onpress} : Props) {
    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.hello}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
                <ActionItem text={action1}/>
                {action2 && <ActionItem text={action2}/>}
                {action3 && <ActionItem text={action3}/>}
                {action4 && <ActionItem text={action4}/>}
              </View>
              {onpress && <Button
                    label="Try it out!"
                    onPress={onpress}
                    theme2 = 'about'/>}

            </View>
    );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 3,
    alignItems: 'center',
    paddingTop: 5,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f8f4f7",
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: -3, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  desc: {
    fontWeight: "bold",
    fontSize: 13,
  },
  hello: {
    fontStyle: "italic",
    fontSize: 18,
    color: "#555",
  },
});
