import { StyleSheet } from "react-native";

export const COLORS = {
  primaryYellow: "#bc7c1c", // Jaune principal
  backgroundBlack: "#111",  // Fond noir
  textWhite: "#FFF",        // Texte blanc
  textGray: "#AAA",         // Texte secondaire
};

export const FONTS = {
  title: "Anton-Regular",      // Police pour les titres (LOC FAMILY)
  graffiti: "UrbanJungle",     // Police pour les tags (MOTORS Family)
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundBlack,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primaryYellow,
    fontFamily: FONTS.title,
  },
  text: {
    fontSize: 16,
    color: COLORS.textWhite,
    fontFamily: "System",
  },
  button: {
    backgroundColor: COLORS.primaryYellow,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.backgroundBlack,
    fontFamily: "System",
  },
});
