import { Category } from "logic/models/Category";

interface ICategoryRepo{
    getCategories() : Promise<Category[] | null>
}

export type {ICategoryRepo}