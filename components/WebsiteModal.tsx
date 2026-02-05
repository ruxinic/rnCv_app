import { StyleSheet, Text, View, Modal, Pressable, ScrollView } from 'react-native';
import { Image } from "expo-image";

type Props = {
    visible: boolean;
    onClose: () => void;
    imgS1: any;
    imgS2: any;
    imgS3: any;
};

export default function ImageModal({ visible, onClose, imgS1, imgS2, imgS3 }: Props) {

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <Pressable style={styles.overlay} onPress={onClose}>
                <Pressable style={styles.modalContent} onPress={(e) => e.stopPropagation()}>
                    
                    <Text style={styles.headerText}>My very first website (2024)</Text>
                    <Text style={styles.headerText}>Interactive Travel Album, with a submit form (HTML, JS, CSS)</Text>
                    <ScrollView  style = {styles.scrollArea}
                        showsVerticalScrollIndicator={true}>
                        <Image source={imgS1} style={styles.image} contentFit="contain" />
                        <Image source={imgS2} style={styles.image} contentFit="contain" />                           
                        <Image source={imgS3} style={styles.image} contentFit="contain" />
                    </ScrollView>

                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </Pressable>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Darker for better focus
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 16,
        width: "90%",
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
        color: '#333',
    },
    scrollArea: {
        maxHeight: 500, // Limits height only when multiple images exist
        width: '100%',
    },
    image: {
        width: "100%",
        height: 350,
        marginBottom: 10,
        borderRadius: 8,
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8
    },
    closeButtonText: {
        fontWeight: 'bold',
        color: '#555'
    }
});