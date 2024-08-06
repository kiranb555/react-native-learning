import { useState } from "react";
import { Button, Modal, View, Text } from "react-native";

export default function ModalUI() {
  const [isModelVisible, setIsModelVisible] = useState(false);
  return (
    <View>
      <Button title="Show Modal" onPress={() => setIsModelVisible(true)} />
      <Modal
        visible={isModelVisible}
        onRequestClose={() => setIsModelVisible(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <View style={{flex: 1, backgroundColor: 'lightblue', padding: 60}}>
          <Text>Do you agree to this terms and conditions?</Text>
          <Button
            title="close"
            color="midnightblue"
            onPress={() => setIsModelVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
