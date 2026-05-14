import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Clase que maneja la conexión a la base de datos
// Usa el patrón Singleton para garantizar una sola instancia
class Database {
    private static instance: Database;
    private connection: mysql.Pool;

    // Constructor privado - nadie puede hacer "new Database()" desde afuera
    private constructor() {
        this.connection = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: Number(process.env.DB_PORT)
        });
    }

    // Método estático que devuelve siempre la misma instancia
    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    // Devuelve el pool de conexiones para hacer queries
    public getConnection(): mysql.Pool {
        return this.connection;
    }
}

export default Database;