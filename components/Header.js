import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state.reducer);
  const onNextScreenRedirection = () => {
    navigation.navigate("userListScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textStyle}>{cartItems.length}</Text>
      </View>
      <View style={{ marginEnd: 20 }}>
        <Button
          title="Demo with API Screen"
          onPress={onNextScreenRedirection}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    backgroundColor: "red",
    paddingVertical: 10,
    alignItems: "flex-end",
  },
  box: {
    backgroundColor: "yellow",
    marginEnd: 20,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});
