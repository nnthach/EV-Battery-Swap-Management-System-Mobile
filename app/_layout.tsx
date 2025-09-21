import { Stack } from "expo-router";
import "./global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [loaded] = useFonts({
  //   PoppinsBlack: require("@assets/fonts/Poppins-Black.ttf"),
  //   PoppinsBold: require("@assets/fonts/Poppins-Bold.ttf"),
  //   PoppinsSemiBold: require("@assets/fonts/Poppins-SemiBold.ttf"),
  //   PoppinsMedium: require("@assets/fonts/Poppins-Medium.ttf"),
  //   PoppinsRegular: require("@assets/fonts/Poppins-Regular.ttf"),
  //   PoppinsLight: require("@assets/fonts/Poppins-Light.ttf"),
  //   ...FontAwesome.font,
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="splashscreen" options={{ headerShown: false }} />
      {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(root)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
