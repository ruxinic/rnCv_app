import { StyleSheet, Text, View, Modal, Pressable, ScrollView, Dimensions } from 'react-native';
import { Image } from "expo-image";

// Get device height to ensure the modal fits any screen
const SCREEN_HEIGHT = Dimensions.get('window').height;

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
            onRequestClose={onClose}>
            <Pressable style={styles.overlay} onPress={onClose}>
                <Pressable style={styles.modalContent} onPress={(e) => e.stopPropagation()}>
                    
                    <View style={styles.header}>
                        <Text style={styles.titleText}>My very first website (2024)</Text>
                        <Text style={styles.subtitleText}>Interactive Travel Album (HTML, JS, CSS)</Text>
                    </View>

                    <View style={styles.scrollContainer}>
                        <ScrollView 
                            showsVerticalScrollIndicator={true}
                            contentContainerStyle={styles.scrollContent}
                        >
                            <Image source={imgS1} style={styles.responsiveImage} contentFit="contain" />
                            <Image source={imgS2} style={styles.responsiveImage} contentFit="contain" />                          
                            <Image source={imgS3} style={styles.responsiveImage} contentFit="contain" />
                        </ScrollView>
                    </View>

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
        backgroundColor: "rgba(0, 0, 0, 0.7)", 
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 20,
        width: "90%",
        maxHeight: SCREEN_HEIGHT * 0.8, 
    },
    header: {
        width: '100%',
        marginBottom: 10,
    },
    titleText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111',
        textAlign: 'center',
    },
    subtitleText: {
        fontSize: 13,
        color: '#666',
        textAlign: 'center',
        marginTop: 4,
    },
    scrollContainer: {
        flexShrink: 1, 
        width: '100%',
        marginVertical: 10,
    },
    scrollContent: {
        paddingBottom: 10,
    },
    image: {
        width: "100%",
        height: 350,
        marginBottom: 12,
        borderRadius: 12,
        backgroundColor: '#f5f5f5',
    },
    closeButton: {
        marginTop: 5,
        padding: 14,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#007AFF',
        borderRadius: 12
    },
    closeButtonText: {
        fontWeight: 'bold',
        color: '#fff'
    },
    responsiveImage: {
        width: "100%",
        aspectRatio: 16 / 8, 
        marginBottom: 6,
        borderRadius: 12,
        backgroundColor: '#f5f5f5', 
    }
});