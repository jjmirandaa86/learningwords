import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../Entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "161.35.3.215",
    port: 3306,
    username: "learningwords",
    password: "bA46$4vVVO-7",
    database: "learningwords",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
