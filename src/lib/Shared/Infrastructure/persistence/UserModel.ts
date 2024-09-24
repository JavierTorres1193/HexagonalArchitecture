import {DataTypes, Model, Sequelize} from 'sequelize'

export class UserModel extends Model {
    public id!: number;
    public Uid!: string;
    public email!:string;
    public password!:string;
    public createdAt!: Date;
    public active !: boolean

    public static initialize(sequelize:Sequelize) {
        UserModel.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey:true,
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
        
    },{
            sequelize,
            tableName: 'Users',
        })
    }

}