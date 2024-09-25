import { Sequelize } from "sequelize";
import { UserModel } from "../../../User/infrastructure/ORM/UserModel";
import {config} from 'dotenv';

config();

const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT as 'postgres' | 'mysql' | 'sqlite' | 'mariadb' | 'mssql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),  // Asegúrate de convertir a número
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
  
  // Registra los modelos con Sequelize
  const models = [UserModel];  // Agrega más modelos según sea necesario
  
  models.forEach((model) => model.initialize(sequelize));

export { sequelize };
