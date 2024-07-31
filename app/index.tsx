import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5D59D9'

      }}
    >
       <Text
        style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#fff', fontSize: 20 }}
      >
        Meu primeiro portfolio
      </Text>

      <Image
        style={{
          width: 300,
          height: 300,
          borderRadius: 300
        }}
        source={require('../assets/images/dani.jpg')}
      />
      </View>
  );
}
