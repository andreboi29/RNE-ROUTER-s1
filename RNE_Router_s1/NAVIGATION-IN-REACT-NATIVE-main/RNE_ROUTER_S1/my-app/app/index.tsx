import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: '#FF5733' }]}>Welcome to My App!</Text>
      <Link href="/login" style={styles.link}>
        <Text style={styles.linkText}>Login</Text>
      </Link>
      <Text style={styles.separatorText}>or</Text>
      <Link href="/signup" style={styles.link}>
        <Text style={styles.linkText}>Sign Up</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dirtywhite",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    
  },
  link: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ff5733",
    borderRadius: 8,
    minWidth: 150,
    alignItems: "center",
    textAlign: "center"
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  separatorText: {
    marginVertical: 20, 
    color: 'black',
  },
});