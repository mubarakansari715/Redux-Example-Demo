import { ScrollView, StyleSheet, View } from "react-native";
import Header from "./Header";
import Product from "./Product";

export default MyAppMainContainer = ({ dummyData }) => {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Header />
      <ScrollView>
        {dummyData.map((item) => (
          <Product currentItem={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
