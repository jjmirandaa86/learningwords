import { Category } from "../Entity/Category";

const add = () => {
	const category = new Category();
	category.name = "Me and Bears";
	category.isActive = true;
};

export { add };
