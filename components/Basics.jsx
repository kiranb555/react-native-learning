import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  Pressable,
} from "react-native";

const logoImg = require(".././assets/adaptive-icon.png");

export default function Basics() {
  return (
    <View>
      <Button
        title="press"
        onPress={() => console.log("Button Pressed")}
        color={"red"}
        disabled
      >
        My Button
      </Button>
      <Pressable
        onPress={() => console.log("Image Pressed")}
        onPressIn={() => console.log("OnPress IN")}
        onPressOut={() => console.log("OnPress Out")}
        onLongPress={() => console.log("OnLong Press")}
      >
        <Image source={logoImg} style={{ height: 300, width: 300 }} />
      </Pressable>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ height: 300, width: 300 }}
      />
      <ImageBackground
        source={logoImg}
        style={{
          height: 300,
          width: 300,
          display: "felx",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Image text</Text>
      </ImageBackground>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
        dolorem! Officiis iure rerum voluptates a cumque velit
      </Text>
      <Image source={logoImg} style={{ height: 300, width: 300 }} />
    </View>
  );
}
