import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';

export default function Index() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && password) {
      if (!email.includes('@')) {
        Alert.alert('Invalid email', "Email must contain '@'");
        return;
      }
      setSubmitted(true);
    } else {
      Alert.alert('Missing Fields', 'Please fill out all fields.');
    }
  };

  const handleClear = () => {
    setEmail('');
    setPassword('');
    setSubmitted(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Login Form</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry
          placeholderTextColor="#999"
        />

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>

          <Pressable style={[styles.button, styles.clearButton]} onPress={handleClear}>
            <Text style={styles.buttonText}>Clear</Text>
          </Pressable>
        </View>

        {submitted && (
          <View style={styles.output}>
            <Text style={styles.outputTitle}>Submitted Information:</Text>
            <Text style={styles.outputText}>Email: {email}</Text>
            <Text style={styles.outputText}>Password: {password}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 30,
    justifyContent: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fafafa',
    color: '#333',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff5733',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#ff5733',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  clearButton: {
    backgroundColor: '#aaa',
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  output: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
  },
  outputTitle: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 10,
    color: '#222',
  },
  outputText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
});
