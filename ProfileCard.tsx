import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png',
        }}
        style={styles.image}
      />

      <Text style={styles.name}>Jenifer Caicedo</Text>
      <Text style={styles.email}>jenifer.caicedo@email.com</Text>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>Cliente EcoExpress</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    marginBottom: 22,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 115,
    height: 115,
    borderRadius: 60,
    marginBottom: 14,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#263238',
    textAlign: 'center',
  },
  email: {
    fontSize: 15,
    color: '#607D8B',
    marginTop: 4,
  },
  badge: {
    backgroundColor: '#C8E6C9',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginTop: 12,
  },
  badgeText: {
    color: '#1B5E20',
    fontWeight: '600',
  },
});