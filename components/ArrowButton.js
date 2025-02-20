import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../styles/globalStyles.js";

const ArrowButton = ({ onPress, direction = "right", color = "black", size = 24 }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AntDesign name={direction === "left" ? "arrowleft" : "arrowright"} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primaryYellow, // Jaune
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ArrowButton;
