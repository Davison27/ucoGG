import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import  Video  from "react-native-video";

const styles = StyleSheet.create({
    backgroundVideo: {
      position: "absolute",
      zIndex:10,
      top:0,
      left: 0,
      alignItems: "stretch",
      bottom: 0,
      right: 0
    },
    tinyLogo: {
      width: 100,
      height: 100,
    },
    text: {
      position: "relative",
      marginLeft: 125,
    },
    searchbar: {
      marginTop: 20,
      marginLeft:10,
      marginRight: 10,
    },
})

const HomeScreen = () => {
  
  return (
   <><><><Image
       style={styles.tinyLogo}
       source={require('../../assets/lol.png')} />
       <Text style={styles.text}>¡Bienvenido a ucoGG!</Text></>
       <Searchbar value="Kan0#EUW" style={styles.searchbar}></Searchbar></>
       <Video 
         source={require('../../assets/lol.mp4')}
         style={styles.backgroundVideo}
         repeat={true}
         muted={true}
         resizeMode={"cover"}
         /></>


  );
};

export default HomeScreen;