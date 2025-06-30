import { Link } from "expo-router";
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require('@/assets/images/smccnasipit.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.topTextContainer}>
          <Image 
            source={require('@/assets/images/smcc.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Welcome To My New App</Text>
        </View>

        <View style={styles.loginContainer}>
          <Link href="/login" asChild>
            <Pressable style={styles.loginButton}>
              <Text style={styles.loginText}>Login</Text>
            </Pressable>
          </Link>

          <Link href="/signup" asChild>
            <Pressable style={styles.signupButton}>
              <Text style={styles.signupText}>Sign Up</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(133, 133, 133, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  topTextContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffff",
    textAlign: "center",
  },
  loginContainer: {
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: 200,
    alignItems: "center",
  },
  signupButton: {
    backgroundColor: "#ffff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: 200,
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  signupText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "500",
  },
});
