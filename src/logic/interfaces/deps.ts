import HttpAuthenticator from "./authenticator/HttpAuthenticator";
import {InMemoryAuthenticator} from "logic/interfaces/authenticator/InMemoryAuthenticator";
import { IAuthenticator } from "logic/interfaces/authenticator/IAuthenticator";
import { HttpCategoryRepo } from "logic/interfaces/repositories/CategoryRepo/HttpCategoryRepo";
import { ICategoryRepo } from "logic/interfaces/repositories/CategoryRepo/ICategoryRepo";


class DependencyContainer{
    authenticator : IAuthenticator
    categoryRepo:ICategoryRepo


    constructor(){
        this.authenticator = new InMemoryAuthenticator()
        this.categoryRepo = new HttpCategoryRepo()
    }
}

export {DependencyContainer}