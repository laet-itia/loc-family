import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FONTS, COLORS } from "../styles/globalStyles.js";


const CarCard = ({ car, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground source={car.images[0]} style={styles.image} imageStyle={{ borderRadius: 15 }}>
        <View style={styles.overlay}>
          <Text style={styles.brand}>{car.brand}</Text>
          <Text style={styles.name}>{car.name}</Text>
          <View style={styles.arrowContainer}>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
    borderRadius: 15,
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  brand: {
    color: "#eee",
    fontSize: 14,
    fontWeight: "bold",
  },
  name: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: FONTS.graffiti,
  },
  arrowContainer: {
    backgroundColor: COLORS.primaryYellow,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});

export default CarCard;
