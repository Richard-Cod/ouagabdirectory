import { AxiosError, AxiosRequestConfig } from "axios";
import { getAuthHeader } from "logic/helper/auth";
import makeRequest from "logic/helper/makeRequest";
import { Category } from "logic/models/Category";
import { ICategoryRepo } from "logic/interfaces/repositories/CategoryRepo/ICategoryRepo";
import { Society } from "logic/models/Society";
import { InMemoryDatas } from "./InMemoryDatas";
import { ISocietyRepo } from "./ISocietyRepo";

class InMemorySocietyRepo implements ISocietyRepo{
  async getSocieties(): Promise<Society[] | null> {
    return  Promise.resolve(InMemoryDatas.societies)
  }
}

export {InMemorySocietyRepo}