import { Pool } from "pg";
import { UserRepository } from "../domain/UserRepository";
import { User } from "../domain/User";
import { UserId } from "../domain/UserId";
import { UserCreatedAt } from "../domain/UserCreatedAt";
import { Username } from "../domain/Username";
import { UserEMail } from "../domain/UserEmail";

type PostgresUser = {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}

export class PostgresUserRepository implements UserRepository{

    client: Pool;

    constructor() {
        this.client = new Pool({
            connectionString: process.env.DATABASE_URL,
        });
    }
    
    async create(user:User): Promise<void> {
        const query = {
            text: "INSERT INTO users (id, name, email) VALUES ($1, $2, $3)",
            values: [user.id.value, user.name.value, user.email.value],
    }; 
    await this.client.query(query);

    };

    async getAll(): Promise<User[]> {
        const query = {
            text: "SELECT * FROM users",
        };
        const result = await this.client.query<PostgresUser>(query);
        return result.rows.map((row) => new User(
            new UserId(row.id),
            new Username(row.name),
            new UserEMail(row.email),
            new UserCreatedAt(row.createdAt)
        ));
    };

    async getUserById(id: UserId): Promise<User | null> {
        const query = {
            text: "SELECT * FROM users WHERE id = $1",
            values: [id.value],
        };

        const result = await this.client.query<PostgresUser>(query);
        
        if (result.rows.length === 0) {
            return null;
        }
        
        const row = result.rows[0];

        return new User(
            new UserId(row.id),
            new Username(row.name),
            new UserEMail(row.email),
            new UserCreatedAt(row.createdAt)
            );
    };
    
    async update(user: User): Promise<void> {
        const query = {
            text: "UPDATE users SET name = $1, email = $2 WHERE id = $3",
            values: [user.name.value, user.email.value, user.id.value],
            };
            await this.client.query(query);
    };

    async delete(id: UserId): Promise<void> {
        const query = {
            text: "DELETE FROM users WHERE id = $1",
            values: [id.value],
            };
            await this.client.query(query);
    }


}