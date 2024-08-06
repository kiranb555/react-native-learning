import {
  View,
  ScrollView,
} from "react-native";
// import Basics from "./components/Basics";
// import ModalUI from "./components/Modal-ui";
import StatusBarComponent from "./components/StatusBar";

// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <ScrollView>
          {/* <Basics/> */}
          {/* <ModalUI/> */}
          <StatusBarComponent/>
      </ScrollView>
    </View>
  );
}