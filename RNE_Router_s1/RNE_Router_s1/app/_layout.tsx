import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#007bff'
        },
        headerTintColor: '#ffff',
        headerTitleStyle:{
          fontWeight: 'bold'
        }
    }}>
          <Stack.Screen name = "index" options={{
            headerTitle: "Home",
            headerShown: false
          }} />
          <Stack.Screen name = "login" options={{
            headerTitle: ""
          }}/>
          <Stack.Screen name = "signup" options={{
            headerTitle: ""
          }} />
    </Stack>
  );
}
