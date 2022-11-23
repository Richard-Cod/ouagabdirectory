import { AxiosError, AxiosRequestConfig } from "axios";
import { getAuthHeader } from "logic/helper/auth";
import makeRequest from "logic/helper/makeRequest";
import { Category } from "logic/models/Category";
import { ICategoryRepo } from "logic/interfaces/repositories/CategoryRepo/ICategoryRepo";

class HttpCategoryRepo implements ICategoryRepo{
  async getCategories(): Promise<Category[] | null> {
    const config : AxiosRequestConfig<any> = {
      method: 'get',
      url: 'categories/',
      headers : await getAuthHeader(),
    };
    
    const handleErrorReponse = (error : AxiosError) => {
      const data = error.response?.data
      if(data){
        // toast(JSON.stringify(data))
      }
    }
    const r : Category[] = await makeRequest(config , handleErrorReponse)
    return r
  }

    
}

export {HttpCategoryRepo}