import { Society } from "logic/models/Society";

interface ISocietyRepo{
    getSocieties() : Promise<Society[] | null>
}

export type {ISocietyRepo}