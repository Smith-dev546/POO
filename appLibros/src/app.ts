import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes";
import libroRoutes from "./routes/libroRoutes";
import prestamoRoutes from "./routes/prestamoRoutes";

const app = express();

app.use(express.json());

app.use("/usuarios", usuarioRoutes);
app.use("/libros", libroRoutes);
app.use("/prestamos", prestamoRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});