import { useState } from "react";
import { View, StatusBar, Text, Button } from "react-native";

const StatusBarComponent = () => {
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  return (
    <View>
      <Button
        onPress={() => setVisibleStatusBar(!visibleStatusBar)}
        title={`${visibleStatusBar ? "hide" : "show"} statusbar`}
      />
      <StatusBar
        backgroundColor="lightgreen"
        barStyle="dark-content"
        hidden={!visibleStatusBar}
      />
    </View>
  );
};

export default StatusBarComponent;
