import { DataTypes, Model, Sequelize, Association, HasOneGetAssociationMixin } from "sequelize";
import { UserModel } from '../../../User/infrastructure/ORM/UserModel';

export class PersonModel extends Model {
    public id!:number;
    public name!:string;
    public lastname!:string;
    public dni!:string;
    public cuit!:string;
    public address!:string;
    public email!:string;

    // Métodos para trabajar con la relación
    public getUser!: HasOneGetAssociationMixin<UserModel>;

    // Asociación entre Person y User
    public static associations: {
        user: Association<PersonModel, UserModel>;
    };

    public static initialize(sequelize:Sequelize) {
        PersonModel.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            dni: {
                type: DataTypes.STRING,
                allowNull: false
            },
            cuit:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            address:{
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'person',
            tableName: 'persons'
        });
    }

    public static associate() {
        PersonModel.hasOne(UserModel, {
            foreignKey: 'personId',
            as: 'user'
        });
    }
}
