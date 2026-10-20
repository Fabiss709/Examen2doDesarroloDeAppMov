import { StyleSheet } from "react-native";

type Props = {
    texto: string;
    tipo: "nombre" | "estado" | "mensaje";
};

export default function Texto({ texto, tipo }: Props) {
    return (
        <text style={styles[tipo]}>{texto}</text>
    );
}

const styles = StyleSheet.create({
    nombre: {
        fontSize: 17,
        fontWeight: "bold",
    },
    estado: {
        fontSize: 12,
        color: "gray",
    },
    mensaje: {
        fontSize: 14,
    },
});