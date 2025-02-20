import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";
import BottomNavBar from "../components/BottomNavBar";
import { FONTS, COLORS } from "../styles/globalStyles.js";

const CarListScreen = ({ navigation }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredCars, setFilteredCars] = useState(cars);

  // Fonction pour filtrer les voitures
  const handleSearch = (text) => {
    setSearchText(text);
    if (text === "") {
      setFilteredCars(cars);
    } else {
      const filtered = cars.filter((car) =>
        car.name.toLowerCase().includes(text.toLowerCase()) || 
        car.brand.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  };

  return (
    <View style={styles.container}>
      {/* Barre du haut avec le titre et la loupe */}
      <View style={styles.header}>
        <Text style={styles.title}>Trouvez votre bonheur parmis notre sélection</Text>
        <TouchableOpacity 
          style={styles.searchIcon} 
          onPress={() => setSearchVisible(!searchVisible)}
        >
          <AntDesign name="search1" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Barre de recherche si activée */}
      {searchVisible && (
        <TextInput
          style={styles.searchBar}
          placeholder="Rechercher des voitures..."
          placeholderTextColor="#AAA"
          value={searchText}
          onChangeText={handleSearch}
        />
      )}

      {/* Liste des voitures */}
      <FlatList
        data={filteredCars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarCard car={item} onPress={() => navigation.navigate("CarDetails", { car: item })} />
        )}
        showsVerticalScrollIndicator={false}
      />

      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundBlack,
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20, // AUGMENTE l'espace entre le titre et la première voiture
  },
  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    flex: 1, // Garde l'équilibre avec la loupe
    marginTop: 10,
    marginRight: 40, // AUGMENTE l'espace entre le titre et la loupe
    fontFamily: FONTS.title
  },
  searchIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#555",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    backgroundColor: "#222",
    color: "#fff",
    fontSize: 16,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default CarListScreen;
