import { StyleSheet, View } from "react-native";
import Texto from "../atomos/Texto";

type Props = {
    nombre: string;
    estado: string;
};

export default function EncabezadoMensaje({ nombre, estado }: Props) {
    return (
        <View style={styles.encabezado}>
            <Texto texto={nombre} tipo="nombre" />
            <Texto texto={estado} tipo="estado" />
        </View>
    );
}

const styles = StyleSheet.create({
    encabezado: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
});