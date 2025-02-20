import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS } from "../styles/globalStyles";

const { width } = Dimensions.get("window");

const BottomNavBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // État pour suivre quel bouton est pressé
  const [pressedButton, setPressedButton] = useState(null);

  // Fonction pour savoir si un bouton doit être actif
  const isButtonActive = (buttonName) => {
    if (pressedButton) {
      return pressedButton === buttonName; // 🔥 Seul le bouton pressé reste actif
    }
    return route.name === buttonName; // 🔥 Sinon, bouton actif par défaut
  };

  return (
    <View style={styles.navContainer}>
      {/* Fond semi-arrondi centré */}
      <View style={styles.navBackground} />

      {/* Icônes parfaitement alignées */}
      <View style={styles.iconRow}>
        {/* Bouton Accueil */}
        <TouchableOpacity
          style={[styles.iconButton, isButtonActive("CarList") && styles.activeButton]}
          onPress={() => navigation.navigate("CarList")}
          onPressIn={() => setPressedButton("CarList")}
          onPressOut={() => setPressedButton(null)}
        >
          <AntDesign name="home" size={28} color={isButtonActive("CarList") ? "black" : "white"} />
        </TouchableOpacity>

        {/* Bouton À propos */}
        <TouchableOpacity
          style={[styles.iconButton, isButtonActive("About") && styles.activeButton]}
          onPress={() => navigation.navigate("About")}
          onPressIn={() => setPressedButton("About")}
          onPressOut={() => setPressedButton(null)}
        >
          <Feather name="help-circle" size={28} color={isButtonActive("About") ? "black" : "white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    position: "absolute",
    bottom: 20,
    left: "30%",
    right: "30%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  navBackground: {
    position: "absolute",
    backgroundColor: "#222",
    height: 60,
    width: width * 0.4,
    borderRadius: 30,
    alignSelf: "center",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    zIndex: 10,
  },
  iconButton: {
    padding: 6,
    borderRadius: 60,
  },
  activeButton: {
    backgroundColor: COLORS.primaryYellow,
    borderRadius: 20,
  },
});

export default BottomNavBar;
