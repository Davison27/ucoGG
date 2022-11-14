import React from "react";
import { Image, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
        marginLeft: 170,
    }
})

const HomeScreen = () => {
  return (
    <><Image
          style={styles.tinyLogo}
          source={require('../../assets/lol.jpg')} />
    <Text>¡Bienvenido a ucoGG!</Text></>
  );
};

export default HomeScreen;