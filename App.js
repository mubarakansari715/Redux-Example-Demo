import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./components/Header";
import Product from "./components/Product";
import { SafeAreaView } from "react-native-safe-area-context";
import MyAppMainContainer from "./components/MyAppMainContainer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import UserList from "./components/UserList";

const dummyData = [
  {
    id: 1,
    title: "Iphone one",
    imageUri:
      "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc",
    price: 10000,
  },
  {
    id: 2,
    title: "Iphone two",
    imageUri:
      "https://www.cnet.com/a/img/resize/552e099164dae5b22840cf845e9bd3a2f4874ba0/hub/2024/09/18/f4dfbd54-08f9-42cc-9309-1c3923a06558/iphone-16-plus-pro-pro-max-family-4559.jpg?auto=webp&fit=crop&height=675&width=1200",
    price: 30000,
  },
  {
    id: 3,
    title: "Iphone three",
    imageUri:
      "https://cdn.thewirecutter.com/wp-content/media/2025/02/iphone-2048px-0652.jpg?auto=webp&quality=75&width=1024",
    price: 50000,
  },
  {
    id: 4,
    title: "Iphone two",
    imageUri:
      "https://www.cnet.com/a/img/resize/552e099164dae5b22840cf845e9bd3a2f4874ba0/hub/2024/09/18/f4dfbd54-08f9-42cc-9309-1c3923a06558/iphone-16-plus-pro-pro-max-family-4559.jpg?auto=webp&fit=crop&height=675&width=1200",
    price: 30000,
  },
];

const Stack = createStackNavigator();

// Create a separate component for the main screen
const MainScreen = () => {
  return <MyAppMainContainer dummyData={dummyData} />;
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <Header /> */}

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="mainscreen"
              component={MainScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="userListScreen" component={UserList} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

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
