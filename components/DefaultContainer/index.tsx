import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default ({ children }) => (
  <LinearGradient style={styles.container} colors={colors}>
    {children}
  </LinearGradient>
);

const colors = ["red", "blue", "yellow"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
