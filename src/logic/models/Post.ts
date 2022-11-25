import { Category } from "./Category";

interface Society{
    id : number;
    name:string;
    bio : string;
    price_range : string;
    images : string[]
     


    category:Category;
}

export type {Society}