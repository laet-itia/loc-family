import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = ({ width = 100, height = 50, style }) => {
  return (
    <Image
      source={require("../assets/logo.png")}
      style={[styles.logo, { width, height }, style]} // Fusion des styles
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
  },
});

export default Logo;
