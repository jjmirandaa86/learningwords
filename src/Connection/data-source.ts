import "reflect-metadata";
import { DataSource } from "typeorm";
const { DB_HOST, DB_NAME, DB_PORT, DB_USER, DB_PASSWD } = process.env;

import { User } from "../Entity/User";
//import { Category } from "../Entity/Category";
//import { Words } from "../Entity/Words";

export const AppDataSource = new DataSource({
	type: "mysql",
	host: DB_HOST,
	port: Number(DB_PORT),
	username: DB_USER,
	password: DB_PASSWD,
	database: DB_NAME,
	synchronize: true,
	logging: false,
	entities: [User],
	migrations: [],
	subscribers: [],
});
