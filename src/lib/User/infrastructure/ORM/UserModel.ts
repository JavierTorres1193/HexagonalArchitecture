import { DataTypes, Model, Sequelize, Association, BelongsToGetAssociationMixin } from 'sequelize';
import { PersonModel } from '../../../Person/infrastructure/ORM/PersonModel';

export class UserModel extends Model {
    public id!: number;
    public Uid!: string;
    public email!:string;
    public password!:string;
    public createdAt!: Date;
    public active !: boolean;
    public personId!: number;  // Clave foránea que conecta con Person

    // Métodos para trabajar con la relación
    public getPerson!: BelongsToGetAssociationMixin<PersonModel>;

    // Asociación entre User y Person
    public static associations: {
        person: Association<UserModel, PersonModel>;
    };

    public static initialize(sequelize:Sequelize) {
        UserModel.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement: true
            },
            personId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'persons', // Nombre de la tabla a la que hace referencia
                    key: 'id'
                }
            },
            Uid: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },
            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        }, {
            sequelize,
            tableName: 'users',
        });
    }

    public static associate() {
        UserModel.belongsTo(PersonModel, {
            foreignKey: 'personId',
            as: 'person'
        });
    }
}
