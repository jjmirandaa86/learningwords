import { AppDataSource } from "./data-source";

const connect = AppDataSource.initialize()
	.then(() => connect)
	.catch((error) => error);

export default connect;
