import { useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import ProfileCard from "../components/ProfileCard";

export default function HomeScreen() {
  const [phone, setPhone] = useState("0987654321");

  const saveChanges = () => {
    Alert.alert("EcoExpress", "Los cambios fueron guardados correctamente.");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>EcoExpress</Text>
      <Text style={styles.subtitle}>Perfil del usuario</Text>

      <ProfileCard />

      <View style={styles.formBox}>
        <Text style={styles.label}>Número de teléfono</Text>

        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="Ingrese su número"
        />

        <View style={styles.buttonBox}>
          <Button
            title="Guardar cambios"
            color="#2E7D32"
            onPress={saveChanges}
          />
        </View>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Opciones del perfil</Text>
        <Text style={styles.infoText}>• Mis pedidos ecológicos</Text>
        <Text style={styles.infoText}>• Dirección de entrega</Text>
        <Text style={styles.infoText}>• Centro de ayuda</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF7EA",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1B5E20",
    textAlign: "center",
    marginTop: 30,
  },
  subtitle: {
    fontSize: 17,
    color: "#4CAF50",
    textAlign: "center",
    marginBottom: 24,
  },
  formBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#263238",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#A5D6A7",
    backgroundColor: "#F9FFF9",
    borderRadius: 14,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  buttonBox: {
    borderRadius: 14,
    overflow: "hidden",
  },
  infoBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1B5E20",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 15,
    color: "#455A64",
    marginBottom: 6,
  },
});
