import { StyleSheet, View } from "react-native";
import Texto from '../atomos/Texto';
import EncabezadoMensaje from "../moleculas/EncabezadoMensaje";

type Props = {
    nombre: string;
    estado: string;
    mensaje: string;
};

export default function Mensaje({ nombre, estado, mensaje }: Props) {
    return (
        <View style={styles.card}>
            <EncabezadoMensaje nombre={nombre} estado={estado} />
            <Texto texto={mensaje} tipo="mensaje" />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#35ff93",
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
});