import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CreatePost from "./src/screens/CreatePost";
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: false,
                  cardStyle: { backgroundColor: "#fff" },
                }}
              />
              <Stack.Screen
                name="CreatePost"
                component={CreatePost}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </KeyboardAvoidingView>
      <StatusBar style="dark" />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
});

