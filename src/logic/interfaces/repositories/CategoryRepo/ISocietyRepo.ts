import { Society } from "logic/models/Post";

interface ISocietyRepo{
    getSocieties() : Promise<Society[] | null>
}

export type {ISocietyRepo}