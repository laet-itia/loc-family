import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import ArrowButton from "../components/ArrowButton.js";
import { FONTS, COLORS } from "../styles/globalStyles.js";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require("../assets/car-background-2.jpg")} 
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Conteneur pour le slogan et la flèche */}
        <View style={styles.bottomContainer}>
          <Text style={styles.slogan}>
            Si le bonheur ne s'achète pas, louez-le<Text style={styles.highlight}></Text> !
          </Text>
          <ArrowButton onPress={() => navigation.navigate("CarList")} style={styles.arrowButton} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end", // 🔥 Place le contenu en bas
  },
  container: {
    flex: 1,
    justifyContent: "flex-end", // 🔥 Aligne le contenu en bas de l'écran
    padding: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "flex-end", // 🔥 Aligne le texte et la flèche horizontalement
    justifyContent: "space-between",
    marginBottom: 50,
  },
  slogan: {
    fontSize: 26,
    fontWeight: "bold",
    color: COLORS.textWhite,
    fontFamily: FONTS.title, // 🔥 Applique la police de titre
    lineHeight: 32, // 🔥 Ajuste la hauteur de ligne pour un bon alignement
  },
  highlight: {
    color: COLORS.primaryYellow,
  },
  arrowButton: {
    marginBottom: -5, // 🔥 Ajuste finement la position de la flèche
  },
});

export default HomeScreen;
