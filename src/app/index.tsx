import Mensaje from "@/components/organismos/Mensaje";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.contenedor}>
      <view style={styles.titulo}>
        <text style={styles.titulo}>Mensajes Recibido</text>
      </view>
      <Mensaje nombre="Fabis" estado="En línea" mensaje="Hola, ¿cómo estás?" />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});