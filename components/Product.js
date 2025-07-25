import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { addToCart, removeToCart } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";

export default function Product({ currentItem }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);
  const [isAdded, setAdded] = useState(false);

  const onAddToCartClick = (item) => {
    dispatch(addToCart(item));
  };
  const onRemoveCartClick = (item) => {
    dispatch(removeToCart(item.id));
  };
  useEffect(() => {
    const result = cartItems.filter((item) => item.id === currentItem.id);
    if (result.length) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  }, [cartItems, isAdded]);

  return (
    <View style={styles.cardContainer}>
      <Image style={styles.imageStyle} source={{ uri: currentItem.imageUri }} />
      <View style={styles.cardTextStylesBox}>
        <View style={styles.textContainerStyle}>
          <Text style={styles.textStyle}>{currentItem.title}</Text>
          <Text style={styles.textStyle}>{currentItem.price}</Text>
        </View>
        {isAdded ? (
          <CustomCartButton
            label={"Remove to cart"}
            clickItem={() => onRemoveCartClick(currentItem)}
          />
        ) : (
          <CustomCartButton
            label={"Add to cart"}
            clickItem={() => onAddToCartClick(currentItem)}
          />
        )}
      </View>
    </View>
  );
}
const CustomCartButton = ({ label, clickItem }) => {
  return (
    <TouchableOpacity
      onPress={clickItem}
      activeOpacity={0.6}
      style={styles.addToCartStyle}
    >
      <Text style={styles.addToCartTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardContainer: {
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#d4d4",
    elevation: 5,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
  cardTextStylesBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 150,
    width: "100%",
  },

  textContainerStyle: {
    padding: 10,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  addToCartStyle: {
    alignSelf: "center",
    marginEnd: 15,
  },
  addToCartTextStyle: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
  },
});
