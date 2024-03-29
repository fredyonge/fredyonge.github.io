import * as Font from "expo-font"

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  await Font.loadAsync({
    //   Montserrat: require("./Montserrat-Regular.ttf"),
    //   "Montserrat-Regular": require("./Montserrat-Regular.ttf"),
    "Garamond-Bold": require("./EBGaramond-Bold.ttf"),
    "Montserrat-Regular": require("./Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./Montserrat-Medium.ttf"),
    "Montserrat-Bold": require("./Montserrat-Bold.ttf"),
  })
}
