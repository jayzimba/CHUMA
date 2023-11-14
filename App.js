import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const url = "https://jimpl.com/"; // Replace with the URL of your website
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: url }} />
      <View
        style={{
          backgroundColor: "#21dc96",
          height: 200,
          width: "100%",
          position: "absolute",
          paddingTop: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: "500", color: "white" }}>
          Secure your data today
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "500", color: "white" }}>
          PONCHO DETECTIVE SOFTWARE
        </Text>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
