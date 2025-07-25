import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "./redux/action";

export default function UserList() {
  const dispatch = useDispatch();
  const userListData = useSelector((state) => state.reducer);

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>User List from API</Text>
        {userListData.length > 0 ? (
          userListData.map((user, index) => (
            <View key={user.id || index} style={styles.userCard}>
              <Text style={styles.userName}>
                {user.firstName} {user.lastName}
              </Text>
              <Text style={styles.userEmail}>{user.email}</Text>
              <Text style={styles.userAge}>Age: {user.age}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.loadingText}>Loading users...</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  userCard: {
    backgroundColor: "white",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  userAge: {
    fontSize: 14,
    color: "#888",
  },
  loadingText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 50,
  },
});
