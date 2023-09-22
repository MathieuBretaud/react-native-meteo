import { Home } from "./pages/Home/Home";
import { s } from "./App.style";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import backgroundImg from "./assets/background.png";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Forcast } from "./pages/Forecast/Forcast";

const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });
  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        source={backgroundImg}
        style={s.img_background}
        imageStyle={s.img}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {isFontLoaded ? (
              <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Home"
              >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Forcast" component={Forcast} />
              </Stack.Navigator>
            ) : null}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
