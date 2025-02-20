import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons"; // Ajout des icônes
import CustomCarousel from "../components/CustomCarousel";
import ArrowBack from "../components/ArrowButton";
import { Image } from "react-native";
import { COLORS, FONTS } from "../styles/globalStyles";
import Logo from "../components/Logo";


const { width } = Dimensions.get("window");

const CarDetailsScreen = ({ route, navigation }) => {
  const { car } = route.params;

  // Fonction pour ouvrir WhatsApp
  const handleWhatsApp = () => {
    const url = `https://wa.me/${car.whatsappNumber.replace(/\+/g, "")}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
        
        <View style={styles.logoOverlay}>
        </View>


      {/* Conteneur du carousel et de la flèche */}
      <View style={styles.topSection}>
        {/* Flèche de retour dans un conteneur absolu */}
        <View style={styles.arrowContainer}>
          <ArrowBack onPress={() => navigation.goBack()} direction = "left" />
        </View>

        {/* Carousel d'images */}
        <CustomCarousel
          data={car.images}
          itemHeight={400}
        />
      </View>

      {/* Contenu en bas */}
      <View style={styles.detailsContainer}>
        <Text style={styles.brand}>{car.brand}</Text>
        <Text style={styles.name}>{car.name}</Text>
        <Text style={styles.description}>{car.description}</Text>

        {/* Spécifications avec icônes */}
        <View style={styles.specsContainer}>
          <View style={styles.specBox}>
            <FontAwesome5 name="tachometer-alt" size={24} color="#bc7c1c" style={styles.icon} />
            <View>
              <Text style={styles.specLabel}>Vitesse Max</Text>
              <Text style={styles.specValue}>{car.specs.maxSpeed}</Text>
            </View>
          </View>
          <View style={styles.specBox}>
            <MaterialCommunityIcons name="engine-outline" size={28} color="#bc7c1c" style={styles.icon} />
            <View>
              <Text style={styles.specLabel}>Moteur</Text>
              <Text style={styles.specValue}>{car.specs.engine}</Text>
            </View>
          </View>
          <View style={styles.specBox}>
            <FontAwesome5 name="users" size={24} color="#bc7c1c" style={styles.icon} />
            <View>
              <Text style={styles.specLabel}>Sièges</Text>
              <Text style={styles.specValue}>{car.specs.seats}</Text>
            </View>
          </View>
        </View>

        {/* Bouton WhatsApp */}
        <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsApp}>
          <FontAwesome5 name="whatsapp" size={24} color="#25D366" />
          <Text style={styles.whatsappText}>Contactez-nous sur WhatsApp</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  topSection: {
    position: "relative",
    height: 400, // Même hauteur que le carousel
  },
  arrowContainer: {
    position: "absolute",
    top: 50, // Ajustez cette valeur selon vos besoins
    left: 20,
    zIndex: 10, // Pour s'assurer que la flèche est au-dessus du carousel
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#222",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
  },
  brand: {
    color: COLORS.primaryYellow,
    fontSize: 16,
    fontWeight: "bold",
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 10,
    fontFamily: FONTS.graffiti
  },
  description: {
    fontSize: 14,
    color: "#AAA",
    marginTop: 10,
    marginBottom: 15, // Ajout d'une marge en bas
    lineHeight: 20, // Meilleur espacement des lignes
  },
  location: {
    fontSize: 14,
    color: "#AAA",
    marginTop: 5,
  },

  // 🚀 MISE À JOUR DES SPÉCIFICATIONS 🚀
  specsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20, // Ajout d'une marge en bas
  },
  specBox: {
    width: "30%",
    backgroundColor: "#333",
    paddingVertical: 30, // Plus d'espace en hauteur
    paddingHorizontal: 10,
    borderRadius: 12,
    alignItems: "center", // Centre l'icône et le texte
    justifyContent: "center", // Centrage vertical
    minHeight: 120, // Hauteur plus grande
  },
  icon: {
    marginBottom: 10, // Espace entre l'icône et le texte
  },
  specLabel: {
    color: "#AAA",
    fontSize: 14, // Un peu plus grand pour lisibilité
    marginBottom: 5, // Espace entre le label et la valeur
    textAlign: "center",
  },
  specValue: {
    color: "#FFF",
    fontSize: 18, // Augmenté pour plus d'impact
    fontWeight: "bold",
    textAlign: 'center'
  },

  whatsappButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#25D366",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
    alignSelf: "center",
    marginTop: 20,
  },
  whatsappText: {
    color: "#25D366",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
      whatsappIcon: {
    marginRight: 5, // Ajustement de l'espace entre l'icône et le texte
  },
  logoOverlay: {
      position: "absolute",
      right: "3%",
      zIndex: 10, // Assure qu'il est au-dessus des images
    },      
});

  export default CarDetailsScreen;
  