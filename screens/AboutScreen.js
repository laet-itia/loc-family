import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Linking } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import BottomNavBar from "../components/BottomNavBar";
import Logo from "../components/Logo";
import { COLORS, FONTS } from "../styles/globalStyles";

const faqs = [
  { question: "Où se situe l'agence ?", answer: "L'agence est située à [adresse ici]." },
  { question: "Quelle est la durée minimale de location ?", answer: "La durée minimale de location est de 24 heures." },
  { question: "Comment obtenir les prix ?", answer: "Les prix varient selon les modèles. Contactez-nous via WhatsApp pour plus d’informations." },
];

const AboutScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Logo en haut */}
        <Logo width={100} height={50} style={styles.logo} />

        {/* Image en bannière */}
        <Image source={require("../assets/car-rental-2.jpg")} style={styles.headerImage} />

        {/* À propos */}
        <View style={styles.aboutSection}>
          <Text style={styles.title}>À propos de nous</Text>
          <Text style={styles.aboutText}>
          Chez Loc Family, la liberté et le plaisir ne s’achètent pas… 
          mais ils se vivent, le temps d’un trajet. 
          </Text>
        </View>

        {/* FAQ améliorée */}
        <View style={styles.faqContainer}>
          {faqs.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.faqItem} 
              onPress={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <View style={styles.faqHeader}>
                <Text style={styles.faqQuestion}>{item.question}</Text>
                <AntDesign 
                  name={expandedIndex === index ? "minus" : "plus"} 
                  size={20} 
                  color={COLORS.primaryYellow}
                />
              </View>
              {expandedIndex === index && <Text style={styles.faqAnswer}>{item.answer}</Text>}
            </TouchableOpacity>
          ))}
        </View>

        {/* Section Contact épurée */}
        <View style={styles.contactSection}>
          <Text style={styles.title}>Nous contacter</Text>
          <View style={styles.contactIcons}>
            <TouchableOpacity onPress={() => Linking.openURL("https://wa.me/numéro")} style={styles.whatsappButton}>
              <FontAwesome name="whatsapp" size={24} color="#25D366" />
              <Text style={styles.whatsappText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("tel:123456789")} style={styles.phoneButton}>
              <FontAwesome name="phone" size={24} color="#FFF" />
              <Text style={styles.phoneText}>Appeler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Barre de navigation */}
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  scrollContent: {
    padding: 20,
    alignItems: "center",
    paddingBottom: 80,
  },
  logo: {
    marginTop: 40,
    marginBottom: 25,
  },
  headerImage: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    marginBottom: 25,
  },
  aboutSection: {
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    marginBottom: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.primaryYellow,
    marginBottom: 8,
    textAlign: "center",
    marginBottom: 10,
  },
  aboutText: {
    color: "#DDD",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
  },
  faqContainer: {
    width: "100%",
    marginBottom: 25,
  },
  faqItem: {
    backgroundColor: "rgba(255, 255, 255, 0.05)", // Fond légèrement transparent
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqQuestion: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  faqAnswer: {
    color: "#AAA",
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },
  contactSection: {
    width: "100%",
    alignItems: "center",
    paddingTop: 15,
  },
  contactIcons: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 20,
  },
  whatsappButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#25D366",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
  },
  whatsappText: {
    color: "#25D366",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  phoneButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
  },
  phoneText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default AboutScreen;
