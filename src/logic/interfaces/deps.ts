import HttpAuthenticator from "./authenticator/HttpAuthenticator";
import {InMemoryAuthenticator} from "logic/interfaces/authenticator/InMemoryAuthenticator";
import { IAuthenticator } from "logic/interfaces/authenticator/IAuthenticator";
import { HttpCategoryRepo } from "logic/interfaces/repositories/CategoryRepo/HttpCategoryRepo";
import { ICategoryRepo } from "logic/interfaces/repositories/CategoryRepo/ICategoryRepo";
import { InMemoryCategoryRepo } from "./repositories/CategoryRepo/InMemoryCategoryRepo";
import { ISocietyRepo } from "./repositories/CategoryRepo/ISocietyRepo";
import { InMemorySocietyRepo } from "./repositories/CategoryRepo/InMemorySocietyRepo";


class DependencyContainer{
    authenticator : IAuthenticator
    categoryRepo:ICategoryRepo
    societyRepo : ISocietyRepo

    constructor(){
        this.authenticator = new InMemoryAuthenticator()
        this.categoryRepo = new InMemoryCategoryRepo()
        this.societyRepo = new InMemorySocietyRepo
    }
}

export {DependencyContainer}