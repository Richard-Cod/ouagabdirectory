import { AxiosError, AxiosRequestConfig } from "axios";
import { getAuthHeader } from "logic/helper/auth";
import makeRequest from "logic/helper/makeRequest";
import { Category } from "logic/models/Category";
import { ICategoryRepo } from "logic/interfaces/repositories/CategoryRepo/ICategoryRepo";
import { InMemoryDatas } from "./InMemoryDatas";

class InMemoryCategoryRepo implements ICategoryRepo{
  async getCategories(): Promise<Category[] | null> {
    return  Promise.resolve(InMemoryDatas.categories)
  }

    
}

export {InMemoryCategoryRepo}