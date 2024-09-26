import { Sequelize } from "sequelize";
import { config } from 'dotenv';
import { UserModel } from "../../../User/infrastructure/ORM/UserModel";
import { PersonModel } from "../../../Person/infrastructure/ORM/PersonModel";

config();

const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT as 'postgres' | 'mysql' | 'sqlite' | 'mariadb' | 'mssql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),  // Asegúrate de convertir a número
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

const models = [UserModel, PersonModel]; 
models.forEach((model) => model.initialize(sequelize)); 

// Establecer las asociaciones después de inicializar los modelos
UserModel.associate();
PersonModel.associate();

export { sequelize };
